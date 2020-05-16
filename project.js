$(document).ready(function () {
    var location = '';
    $('#go-weather').on('click', function (event) {
        event.preventDefault();
        location = $("#len1").val();
        getWeatherData(location);
        getTripAdvisorData(location);
    })
    var getWeatherData = function (location) {
        var APIKey = "b212266a3b5800f1c727bf9539b273bb";
        //location = $('#len1').val();
  //      location = 'Chicago';
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var cityName = response.name;
            $('.weather-api').append('<br>' + cityName);
        })
    }
        //------------------------------------------------------------------
        var getTripAdvisorData = function (location) {
            var settings = {
                //endpoint: locations/search
                "async": true,
                "crossDomain": true,
                "cors": true,
                "url": `https://tripadvisor1.p.rapidapi.com/locations/search?location_
                    id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${location}`,
                "method": "GET",
                "headers": {
                    'Access-Control-Allow-Origin': '*',
                    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                    "x-rapidapi-key": "83c24764bamsh4ab0e0175aae739p1180b7jsn62d3645b374e"
                }
            }
            $.ajax(settings).done(function (response) {
          //      console.log(response);
                var i = 0;
                for (var i = 0; i < response.data.length; i++) {
                // for (x of response.data) {
                    // cityName= $('#len1').val();
                    if (response.data[i].result_type === "geos" && response.data[i].result_object.name === location ) {
                       
                        console.log(response);
                        console.log(response.data[i].result_object.name);
                        console.log(response.data[i].result_object.location_id);
                        // alert(response.data[i].result_object.location_id);
                        var city2 = response.data[i].result_object.name;
                        var cityId = response.data[i].result_object.location_id;
                       getTripAdvisorData2(cityId);
                        
                    }
                    else {
                        //alert("Trip Advisor Info Not Found 404");
                        break;
                    }
                }
                //$('.trip-advisor-api').append(`<br><img src="${imageURL}" class="img-fluid" alt="Responsive image"></img width="${imageWidth}">`);
            });
        }
        //getTripAdvisorData(location);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // trip advisor
    //  attractions/ list 
    var getTripAdvisorData2 = function (cityId) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "cors": true,
            "url": `https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&location_id=${cityId}`,
            "method": "GET",
            "headers": {
                'Access-Control-Allow-Origin': '*',
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "0cd2c0f9famsh2558fe85925d9e8p19aa40jsn4b596027b6b5"
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
            var iStart = 0;
            // for (var i = 0; i < 10; i++) {
            for (x of response.data) {
  //              alert("i1",i);
                if (iStart < 10){

                    var randomAttractions = Math.floor(Math.random() * response.data.length);
                    if (response.data[randomAttractions].name !== undefined){
                        //alert (randomAttractions);
                        // console.log(randomAttractions);
                        // console.log(randomAttractions);
                        console.log(response.data[randomAttractions]);
                        // console.log(response.data[randomAttractions].name);
                        // console.log(response.data[randomAttractions].description);
                        // console.log(response.data[randomAttractions].website);
                        // console.log(response.data[randomAttractions].rating);
                        // console.log(response.data[randomAttractions].photo.images.medium.url);
                        // console.log(response.data[randomAttractions].photo.images.medium.width);
                        var imageURL = response.data[randomAttractions].photo.images.medium.url;
                        var imageWidth = response.data[randomAttractions].photo.images.medium.width;
                        $('.trip-advisor-api').append('<br>' + response.data[randomAttractions].name);
                        $('.trip-advisor-api').append('<br>' + response.data[randomAttractions].description);
                        $('.trip-advisor-api').append('<br>' + response.data[randomAttractions].website);
                        $('.trip-advisor-api').append('<br>' + response.data[randomAttractions].rating);
                        $('.trip-advisor-api').append('<br> ------------------ ');
                        // console.log(response.data[randomAttractions].description);
                        // console.log(response.data[randomAttractions].website);
                        // console.log(response.data[randomAttractions].rating);
                        $('.trip-advisor-api').append(`<br><img src="${imageURL}" class="img-fluid" alt="Responsive image"></img width="${imageWidth}">`);                   
                    }
                 
                }
                iStart++;
//                alert("i2",i);
            }
        });
    }
});
