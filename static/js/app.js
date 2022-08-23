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