$(document).ready(function () {
// The grid inputs are stored as const variables. This jQuery selector will remain the same throughout the code
const height = $('#inputHeight');
const width = $('#inputWidth');
// canvas is a const variable as it remains the same all through this code
const canvas = $('#pixelCanvas');

// The makeGrid function creates a grid (canvas) depending on the input values that determine the size of the grid
function makeGrid() {
    canvas.find('tbody').remove();
    // The input values that determines the size of the grid
    let gridHeight = height.val();
    let gridWidth = width.val();
    /* The table body, table rows and table data make up the grid. the jQuery API, append is used to insert the 
    table body in the canvas */
    canvas.append('<tbody></tbody>');
    let canvasBody = canvas.find('tbody');
    // A for loop generates the table rows and the jQuery API, append inserts the table rows in the table body
    for (let x = 0; x < gridWidth; x++) {
    canvasBody.append('<tr></tr>');
    }
    // A for loop generates the table data and the jQuery API, append inserts the table data in the table rows
    for (let y = 0; y < gridHeight; y++) {
    canvas.find('tr').append('<td></td>');
    }
}
/* When a click event is delivered to the table data on the canvas, the listener reacts by painting the cell 
    with the user's pre-selected color */
canvas.on('click', "td", function(){
    let color = colorPicker.val();
    $(this).css("background-color", color);
});
/* When a double click event is delivered to the table data on the canvas, the listener reacts by reverting the painted cell
to white, the background color of the canvas. This functionality is available if the user mistakenly paints a cell*/
canvas.on('dblclick', "td", function(){
    $(this).css("background-color", "white");
});
/* The default action of the button is prevented and in this code, the event listener responds to the click of the button
    by invoking the makeGrid function */
$('#button').on('click', function (event) {
    event.preventDefault();
    makeGrid();
/* The resetButton is used if the user wants to start painting afresh. This button is different from the submit button in that
    it doesn't create a new grid/canvas but reverts the colours of all the cells to default, white. */
/* The event listener listens for a click event and responds by changing all the colours in each cell to the background 
    color of the canvas, white */
$('#resetButton').on('click', function (event) {
    event.preventDefault();
    $('td').css('background-color', 'white');
});
});

});
