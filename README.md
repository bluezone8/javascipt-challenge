# JAVASCRIPT CHALLENGE - LEVELS 1 AND 2 COMBINED
___________
### Purpose
The purpose of this repository is to store files related to the Aliens-R-Real UFO Sightings Data posting  
___
###  Tool Choice and Rationale
This project utilized a number of web technology tools to provide the functionality for the UFO Sightings Data website.  
1.  Inherently HTML forms the basis of the framework of the website  
2.  Javascript is used to provide the user interactivity functionality for the site.  Specifically the d3 Javascript library is ultilized to perform two primary functions: a) take data in the form of a JSON file and place it into a table within the HTML page and b) provide the user with fields that can be used to filter the table data based on  five of the included categories of data related to when and where the sightings occured as well as the observed morphology of the UFO sighted (date, city, state, country, and shape) 
3.  CSS is used to facilitate the viewing of the site and the data by providing the styling of all of the elements of the website.  Specifically the Bootstrap implementation of CSS is used to provide arrangement and coloring of the elements including the data table.     
____
### Approach and Implementation
The primary requirement (Level 1) for the website was to provide a site that displays UFO siting data for a given period and allow a user to filter and view that data based on the date of the sighting. This is provided in the top most field of the filtering section on the left side of the site. A user can enter a desired date to display the sightings for in the mm/dd/yyyy format and the UFO sighting data for that date is displayed iun the table.  
An optional requirement for the site was to provide the user with additional filtering options for the sighting data.  These additional filters are also included in this implementation. In addition to the date of the sighting the user is also able to limit the viewed data to specific cities, states, countries, or shape descriptions of the UFO.  There are fundamentally two options for including these additional filters along with the orginal date filter: the first would be creating 2 separate implemenations that would include the html, javascript application, and data for each - one with date filtering and another with the other four filters.  The second option would be to include all filtering options in one site.  This is the option that was chosen for this project implementation for a couple of reasons: a) it is a more natural implementation to provide a single user solution rather than two and b) though the date is a different type of data from the others the chosen structure for the code allowed for them all to be coded together.  
_______
### User Instructions
The site contains two primary areas.  On the right is area where the UFO sighting data is displayed in a table.  On the left is the area that facilitates filtering the data table according to user defined criteria. To dsplay the data the user only has to make the desired filter selection and click the Filter Table button to display the sighting data.  
1.  Date: for entering a date the format is mm/dd/yyyy.  So for October 11, 2010 for example the user would enter 10/11/2010.  However for single digit value days and months it is only nescessary to enter single digits for those dates.  For example for January 1, 2010 the user would enter 1/1/2010.  
2. Other Filters:  The user can enter a given entry for city, state abbreviation, two letter country abbreviation, or shape in uppercase, lowercase, or any combination of the two as desired.  For example for city one could enter San Diego, SAN DIEGO, or san diego.  Similarly for the state one could enter CA, Ca, or ca.  
3.  All of the sighting data (unfiltered) is available to the user by clicking the Fiter Table button with no filter criteria entered into the filter fields.  This can be used to view all of the data when the site open initially and the table is empty. To view all of the data after viewing the filtered data one can clear the filter fields by selecting the text in them and hitting the backspace or delete keys and then clicking the Filter Table button with no filters.  
_____
### Application Code Structure Overview
The application is composed of 3 basic parts:
1. Selection of primary needed HTML elements and assignment to variables and 'listening' for the user clicking the filter Table button
2. Function that determines the state of the form fields when the Filter Table button is clicked and calls the function to display the data table using created subsets of the total data based on that state (i.e. user filter inputs) 
3. Function that displays the required data in the table
 
__________
### Included Items
I.  Site Files
1.  index.html - html structure for the site
2.  style.css - non Bootstrap element styling 
3.  nasa.jpg and ufo.svg - billboard and logo images for the site respectively
4.  app.js - javascripot application providing the user functionality for the site
5.  data.js - UFO sighting data for the table in JSON format

II. Information Files
1.  Initial Main.jpg, Initial Table and Filter Sections.jpg, All Data_Unfiltered.jpg, DateFilter_01102010.jpg, CityFilter_LaMesa.jpg, StateFilter_NC.jpg, CountryFiletr_US.jpg, ShapeFilter_Triangle.jpg - images that show the functionality of the site in operation when it opens, displaying all data, and the displaying data filtered by each of the filters.  
2. README.md - this document