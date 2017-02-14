(function ($, window, document) {
    $(function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://employees-99bd.restdb.io/rest/employees",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "589c6e2e64c380c04d1ed801"
            }
        }

        $.ajax(settings).done(function (data) {

            var random = makeUniqueRandom(); // Get random number without repeating the last one


            $('#citat-card').on('click', function () {
                $(this).addClass('show');
            });
            var citatHeader = $('#citat-card header');

            citatHeader.find('img').attr("src", "https://employees-99bd.restdb.io/media/" + data[random].bilder);
            citatHeader.find('h1').text(data[random].fnamn + ' ' + data[random].enamn);
            citatHeader.find('h2').text(data[random].klassnamn);
            $('#citat-card #citat p').text(data[random].citat);

        }).fail(function () {
            console.log('error');
        });
    });

    var uniqueRandoms = [];
    var numRandoms = 7; // number of elements in the array
    function makeUniqueRandom() {
        if (!uniqueRandoms.length) { // when uniqueRandoms[] is empty
            for (var i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i); // populate uniqueRandoms[] with new values
            }
        }

        // Get a random number from the values in the uniqueRandoms[] array
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var val = uniqueRandoms[index];

        // remove the value from the array
        uniqueRandoms.splice(index, 1);

        return val;
    }

}(window.jQuery, window, document));




