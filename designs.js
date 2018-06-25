// Your code goes here!
$(document).ready(function () {
// Grid Input
let height = $('#inputHeight');
let width = $('#inputWidth');
// Select color
let colorPicker = $('#colorPicker');
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
for (let x = 1; x <= gridWidth; x++) {
    canvasBody.append('<tr></tr>');
}

// Draw columns
for (y = 1; y <= gridHeight; y++) {
    canvas.find('tr').append('<td></td>');
}
}

// The color to be shown when the user selects a cell
canvas.on('click', "td", function(){
    var color = colorPicker.val();
        $(this).css("background-color", color);
});
// The color to be shown when the user de-selects a cell
canvas.on('dblclick', "td", function(){
        $(this).css("background-color", "white");
});


// Click the Let's Go button to make the Grid
$('#button').on('click', function (event) {
event.preventDefault();
    makeGrid();

$('#resetButton').on('click', function (event) {
event.preventDefault();
     $('td').css('background-color', 'white');
});
});

});