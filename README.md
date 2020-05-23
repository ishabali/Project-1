# Project-1 (05/22/2020)

Group Project by:
     Julie Banter, Isha Bali, Gentry Hunt, Shelsea Yilmaz, and Garrett May 

--------------
This application's function is centered around a user's desire to plan for an upcoming vacation. The application is designed so that upon input of a "City" and click of the "search" button different types of information used for the user's vacation planning will populate based on what data is present within two specific API databases. The first API contains information regarding the weather (Open Weather Map API). This data is manipulated to provide the weather info for the current day and the weather informaton for the next 7 consecutive days. 

The second API utilized is a Trip Advisor API that contains the information for attraction as well as other info for our user. The application uses the input to populate 10 different attractions in the desired city for the user. These attraction have images, descriptions, ratings and URL's to aid our user in planning their vacation around specific attractions the user may be interested in. 

Upon reload of the page, the location search history will be stored in local storage for later use for the user to re-populate any of the previous locations. These previous locations are stored in click buttons for easy access for the user as well. The last location "searched" will also populate upon load of the screen due to the savings in local storage. 