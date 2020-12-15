// from data.js
var tableData = data;

// Select Button and Form elements of html page
var formGroup=d3.select(".form-group");
var button=d3.select("#filter-btn");

// Listen for user click of Filter Table button
button.on("click", onButtonClick);

// Function which executes when user clicks Filter table Button
function onButtonClick() {
    // Select the filter fields on the form and adjust the text for use in displaying data
    let dateField=d3.select("#datetime");
    let dateInput=dateField.property("value");
    let cityField=d3.select("#city");
    let cityInput=cityField.property("value").toLowerCase().trim();  
    let stateField=d3.select("#state");
    let stateInput=stateField.property("value").toLowerCase().trim();
    let countryField=d3.select("#country");
    let countryInput=countryField.property("value").toLowerCase().trim();
    let shapeField=d3.select("#shape");
    let shapeInput=shapeField.property("value").toLowerCase().trim();      

    // Conditions that determine user filter text and create subsets of sighting data based on the user input
    if(dateInput) {
        userData=tableData.filter(val => val.datetime === dateInput);
        tableRender(userData);
    }else if(cityInput) {
        userData=tableData.filter(val => val.city === cityInput);
        tableRender(userData);
    }else if(stateInput) {
        userData=tableData.filter(val => val.state === stateInput);
        tableRender(userData);
    }else if(countryInput) {
        userData=tableData.filter(val => val.country === countryInput);
        tableRender(userData);
    }else if(shapeInput) {
        userData=tableData.filter(val => val.shape === shapeInput);
        tableRender(userData);
    }else { tableRender(tableData);}
};

// function which renders the user desired data table on the html page - clears table- creates new rows and cells and enters the data in the cells
function tableRender(someData) {
    let tableBody=d3.select("tbody");
    tableBody.html(" ");
    someData.forEach((ufo) => {
        var row=tableBody.append("tr");
        Object.entries(ufo).forEach(([key,value]) =>{
            var cell=row.append("td");
            cell.text(value);
        });
    });
};