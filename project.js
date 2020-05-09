$(document).ready(function () {
    var location = '';
    var APIKey = "b212266a3b5800f1c727bf9539b273bb";
   // $('#go-weather').on('click', function () {
        location = $("#len1").val();
        alert(location);
   //})
    //Location//
    var getData = function() {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=bujumbura,burundi&appid=" + APIKey;

        // We then created an AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $('.weather-api').append('<br>' + response.name);
        })

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tripadvisor1.p.rapidapi.com/photos/list?lang=en_US&currency=USD&limit=50&location_id=2233968",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "363c7fbecfmshcbe4cfd3ee41b5fp142feajsn760531d33ab1"
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response.data);
            $('.trip-advisor-api').append('<br>' + response.data[0].caption);
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //trip advisor

        getData(APIKey, location);

})





