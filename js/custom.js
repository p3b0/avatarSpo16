$(function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://employees-99bd.restdb.io/rest/employees",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "589c6e2e64c380c04d1ed801"
        }
    } // end Settings

    $.ajax(settings).done(function(data) {
        var random = makeUniqueRandom(); // Get random number without repeating the last one
        
        $('#citat-card header img').attr("src", "https://employees-99bd.restdb.io/media/"+data[random].bilder);
		$('#citat-card header h1').text(data[random].fnamn + ' ' + data[random].enamn);
		$('#citat-card header h2').text(data[random].klassnamn);
		$('#citat-card #citat p').text(data[random].citat);

    }).fail(function(request, textStatus, errorThrown) {
        console.log("Error!: ", errorThrown);
    });
});

var uniqueRandoms = [];
var numRandoms = 7;
function makeUniqueRandom() {
    if(!uniqueRandoms.length) {
        for(var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }

    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    //Remove the value from the array
    uniqueRandoms.splice(index, 1);

    return val;
}