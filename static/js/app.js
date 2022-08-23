// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select(tbody);

// Function to fill table with data
function buildTable(data) {
    // clear existing data
    tbody.html("");

    //loop through each object in the data and append a row and cells for each value
    data.forEach((dataRow) => {
        // append a row
        let row = tbody.append("tr");
        // loop through each value in the row and add it to a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Function to respond to input
function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if a date is entered, filter the data using that date
    if (date) {
        // only keep the 
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);