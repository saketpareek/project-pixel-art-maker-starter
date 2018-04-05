// Select color input
let selectedColor;

// Select size input
let n, m;

// Select submit button
const submitButton = $('#sizePicker').children().last();

function makeGrid(evt) {
  // Clearing table if already exist
  if ($('tr').length) {
    $('tr').remove();
  }
  // Preventing default action of the browser
  evt.preventDefault();
  // Setting n and m variable to height and width
  n = $('#inputHeight').val();
  m = $('#inputWeight').val();
  // for loop to create rows to the number of n
  for (let i = 1; i <= n; i++) {
    $('#pixelCanvas').append('<tr></tr>');
  }
  //each loop to assign cells to each row to the number of m
  $('tr').each(function(){
    for (let i = 1; i <= m; i++) {
      $(this).append('<td></td>');
    }
    // Selecting each cell and filling it with color
  });
}

// When size is submitted by the user, call makeGrid()
$(submitButton).on('click', makeGrid);
