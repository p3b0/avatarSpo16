(function ($, window, document) {
    $(function () {
        var citatHeader = $('#citat-card header');
        var eID = '';

        /* SHOW CARD */
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

            var random = makeUniqueRandom(data); // Get random number without repeating the last one


            $('#citat-card').on('click', function () {
                $(this).addClass('show');
            });
            //var citatHeader = $('#citat-card header');

            citatHeader.find('img').attr("src", "https://employees-99bd.restdb.io/media/" + data[random].bilder);
            citatHeader.find('h1').text(data[random].fnamn + ' ' + data[random].enamn);
            citatHeader.find('h2').text(data[random].klassnamn);
            $('#citat-card #citat p').text(data[random].citat);
            $('#citat-card .hidden').text(data[random]._id);
            eID = data[random].eID;
            //console.log('This eID: ' + eID);
        }).fail(function () {
            //console.log('error');
        });
        /* END SHOW CARD */

        /* DELETE */
        $('#deleteItem').click(function () {

            var id = $('.hidden').text();
            var settings2 = {
                "async": true,
                "crossDomain": true,
                "url": "https://employees-99bd.restdb.io/rest/employees/" + id,
                "method": "DELETE",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "589c6e2e64c380c04d1ed801",
                    "cache-control": "no-cache"
                }
            }

            $.ajax(settings2).done(function (response) {
                location.reload();

            }).fail(function () {
                //console.log('DELETE error');
            });
        });
        // END DELETE

        /* EDIT */
        $('#editButton').on('click', function (e) {
            $('#newItem').css("display", "none");
            $('#editItem').toggle();
            var id = $('.hidden').text();

            var name = citatHeader.find('h1').text();
            var firstname = name.split(" ")[0];
            var lastname = name.split(" ")[1];
            var classname = citatHeader.find('h2').text();
            var citate = $('#citat-card #citat p').text();

            $('#editItem input#name').val(firstname);
            $('#editItem input#lastname').val(lastname);
            $('#editItem input#course').val(classname);
            $('#editItem textarea#citat').val(citate);

            e.stopPropagation();

            $('#update').on('click', function (e) {
                var newFirstName = $('#editItem input#name').val();
                var newLastName = $('#editItem input#lastname').val();
                var newClassName = $('#editItem input#course').val();
                var newCitat = $('#editItem textarea#citat').val();
                var thisEID = eID;

                var jsondata = {
                    "eID": thisEID,
                    "fnamn": newFirstName,
                    "enamn": newLastName,
                    "klassnamn": newClassName,
                    "citat": newCitat
                };
                //console.log(jsondata);
                var settings3 = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://employees-99bd.restdb.io/rest/employees/" + id,
                    "method": "PUT",
                    "headers": {
                        "content-type": "application/json",
                        "x-apikey": "589c6e2e64c380c04d1ed801",
                        "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify(jsondata)
                }

                $.ajax(settings3).done(function (response) {
                    location.reload();
                }).fail(function (error) {
                    //console.log(error);
                });
            });

        });
        // END EDIT



        /* NEW ITEM */
        $('#newButton').on('click', function (e) {
            $('#editItem').css("display", "none");
            $('#newItem').toggle();

            e.stopPropagation();

            $('#create').on('click', function () {
                $.ajaxPrefilter(function (options) {
                    if (!options.beforeSend) {
                        options.beforeSend = function (xhr) {
                            xhr.setRequestHeader('x-apikey', "589c6e2e64c380c04d1ed801");
                        }
                    }
                });

                var uploadImageSettings = {
                    "async": true,
                    "url": "https://employees-99bd.restdb.io/media/",
                    "method": "POST",
                    "contentType": false,
                    "cache": false,
                    "processData": false
                }

                var formData = new FormData();
                var image = $('#image')[0].files;

                for (var i = 0; i < image.length; i++) {
                    var file = image[i];
                    var name = image[0].name;
                    //console.log("One file ", image[i]);

                    if (!file.type.match('image.*')) {
                        // continue
                    }
                    formData.append('myImage', file, file.name);
                }

                //console.log("POST ", formData);

                uploadImageSettings.data = formData;

                // First ajax request
                $.ajax(uploadImageSettings).done(function (response) {
                    //console.log('image id when upload is done :' + response.ids);

                    // Prepare the values for the user update (second ajax request)
                    // At this time the image should already got an id (respone.ids)
                    // which can be asociated with the new user 
                    var newItem = $('#newItem');
                    var firstname = newItem.find('#name').val();
                    var lastname = newItem.find('#lastname').val();
                    var email = newItem.find('#email').val();
                    var classname = newItem.find('#course').val();
                    var citate = newItem.find('#citat').val();

                    var jsondata = {
                        "fnamn": firstname,
                        "enamn": lastname,
                        "klassnamn": classname,
                        "e-mail": email,
                        "citat": citate,
                        "bilder": response.ids // image id comming from the first request
                    };


                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://employees-99bd.restdb.io/rest/employees",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "x-apikey": "589c6e2e64c380c04d1ed801",
                            "cache-control": "no-cache"
                        },
                        "processData": false,
                        "data": JSON.stringify(jsondata)
                    }

                    // second ajax request begin
                    $.ajax(settings).done(function (response2) {
                        location.reload();
                        //console.log('user cereated!');
                    }).fail(function (error) {
                        //console.log(error);
                    }); // end second ajax request

                }).fail(function (error) {
                    //console.log(error);
                }); // end First ajax request

            });
        });
        // END NEW ITEM

    });

    var uniqueRandoms = [];
    var numRandoms = ''; // number of elements in the array
    function makeUniqueRandom(data) {
        numRandoms = data.length;

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
