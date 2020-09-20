# Project-1 (05/22/2020) 
'Dream Your Vacation' App - - submitted on May 22nd 2020 during Northwestern FULL STACK FLEX coding bootcamp

Group Project by:
     Julianne Bainter, Isha Bali, Gentry Hunt, Shelsea Yilmaz, and Garrett May 

View the deployed ‘Dream Your Vacation’ App at: https://ice-code-nw-2020.github.io/Project-1/
Github (Source Code): https://github.com/Ice-Code-NW-2020/Project-1

Presentation: https://docs.google.com/presentation/d/16xVBVbeUno1KA_uCONFhMQVvGGaDG3cL7PU8L33M824/edit#slide=id.p


A. Concept and Details: This application's function is centered around a user's desire to plan for an upcoming vacation. The application is designed so that upon input of a "City" and click of the "search" button different types of information used for the user's vacation planning will populate based on what data is present within two specific API databases. The first API contains information regarding the weather (Open Weather Map API). This data is manipulated to provide the weather info for the current day and the weather informaton for the next 7 consecutive days. 

The second API utilized is a Trip Advisor API that contains the information for attraction as well as other info for our user. The application uses the input to populate 10 different attractions in the desired city for the user. These attraction have images, descriptions, ratings and URL's to aid our user in planning their vacation around specific attractions the user may be interested in. 

Upon reload of the page, the location search history will be stored in local storage for later use for the user to re-populate any of the previous locations. These previous locations are stored in click buttons for easy access for the user as well. The last location "searched" will also populate upon load of the screen due to the savings in local storage. 


B. Technologies Used: 
- HTML, CSS, JavaScript 
- Bootstrap 
- jQuery
- Ajax
- Moment.js, Rando.js
- API’S (TripAdvisor, OpenWeather)


C. Breakdown of Tasks and Roles:
Isha- Worked on the functionality of TripAdvisor API and error trapping.
Gentry- Github Master, aided in the development of the weather API calls and  functionality.
Garrett- Responsible for the overall HTML layout and research for optimization of website functionality.
Julie- Styling and CSS, aided in javascript logic and functionality.
Shelsea- Styling and CSS, refactoring JS errors
