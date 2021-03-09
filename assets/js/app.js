// Check off specific todos by clicking

// Select all the <li>s
// Method 1 (with if-statement)
// $('li').click(function () {
//   // Add the CSS when clicked: turn the color gray and add line-through.
//   // Add this only to the <li> that is clicked - use 'this' keyword, which refers to the specific <li> that is clicked:

//   // If <li> is gray...
//   if ($(this).css('color') === 'rgb(128, 128, 128)') {
//     // ...remove the CSS:
//     $(this).css({
//       color: 'black',
//       textDecoration: 'none',
//     });
//     // Else, add the CSS:
//   } else {
//     // You can do two separate lines:
//     //   $(this).css('color', 'gray');
//     //   $(this).css('text-decoration', 'line-through');

//     // Or just do one line instead, by using an object (note the 'camelCase'):
//     $(this).css({
//       color: 'gray',
//       textDecoration: 'line-through',
//     });
//   }
// });

// Select all the <li>s
// Method 2 (using CSS class) -> this is just one line! (see '.completed' in CSS):
$('li').click(function () {
  $(this).toggleClass('completed');
});
