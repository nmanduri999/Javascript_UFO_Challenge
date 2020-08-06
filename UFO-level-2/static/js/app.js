// from data.js
var tableData = data;
var tbody = d3.select("#table-body");
// Select the form
var button = d3.select("#filter-btn");
var form = d3.select("#date-form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Displaying the full table 
function init(){  
  data.forEach((rowData) => {
    var row = tbody.append("tr");
    Object.entries(rowData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Empty the table body for every runEvent
  tbody.html("")
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
  
  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value");
  var inputStateValue = inputState.property("value");
  var inputCountryValue = inputCountry.property("value");
  var inputShapeValue = inputShape.property("value");
  //Assiging the table data to a variable
  var filteredData = tableData;
  // checking if the input field is true.
  if (inputDateValue){
  var filteredData = filteredData.filter(filteredData => filteredData.datetime === inputDateValue); 
  }
  if (inputCityValue){
    var filteredData = filteredData.filter(filteredData => filteredData.city === inputCityValue); 
  }
  if (inputStateValue){
    var filteredData = filteredData.filter(filteredData => filteredData.state === inputStateValue);
  }
  if (inputCountryValue){
    var filteredData = filteredData.filter(filteredData => filteredData.country === inputCountryValue);
  } 
  if (inputShapeValue){
    var filteredData = filteredData.filter(filteredData => filteredData.shape === inputShapeValue); 
  }
  //Use d3 to update each cell's text with filtered values 
  filteredData.forEach((rowData) => {
    var row = tbody.append("tr");
    Object.entries(rowData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
};
//calling the init function
init();