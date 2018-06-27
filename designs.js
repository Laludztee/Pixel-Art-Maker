$(document).ready(function () {
// Grid Input
const height = $('#inputHeight');
const width = $('#inputWidth');
// Select color
const colorPicker = $('#colorPicker');
// Select canvas
const canvas = $('#pixelCanvas');

// Make Grid when user inputs sizes
function makeGrid() {
    canvas.find('tbody').remove();
    // Submits the user's inputs to make the Grid
    let gridHeight = height.val();
    let gridWidth = width.val();
    // Adds the rows and columns
    canvas.append('<tbody></tbody>');
    let canvasBody = canvas.find('tbody');
    // Draw rows
    for (let x = 0; x < gridWidth; x++) {
    canvasBody.append('<tr></tr>');
    }
    // Draw columns
    for (let y = 0; y < gridHeight; y++) {
    canvas.find('tr').append('<td></td>');
    }
}
// The color to be shown when the user selects a table data
canvas.on('click', "td", function(){
    let color = colorPicker.val();
    $(this).css("background-color", color);
});
// The color to be shown when the user de-selects a table data
canvas.on('dblclick', "td", function(){
    $(this).css("background-color", "white");
});
// Call the makeGrid function when this button is clicked 
$('#button').on('click', function (event) {
    event.preventDefault();
    makeGrid();
$('#resetButton').on('click', function (event) {
    event.preventDefault();
    $('td').css('background-color', 'white');
});
});

});
