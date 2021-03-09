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

// Remove todo when clicking
// Select all spans:
// $('span').click(function () {

// When a span is clicked, it also triggers the styles of the <li> since a span is inside the <li>, which in itself is inside the <ul>,
// which itself is inside the div, which is in the container, in the HTML element, etc.
// So, this one click is going through 5 or 6 different layers.

// This is called EVENT BUBBLING.

// What this means is that this event is initially triggered on the span - that's where it originates.
// But then it bubbles up into parent elements and will keep on triggering click events until it hits the HTML element, where it stops.

// To prevent the <li> click handler from triggering when click on the span, which is inside the <li>
// what we can do is to tell the event inside the span to NOT BUBBLE ANYMORE - just to stop in its tracks and not trigger any of the events on parent elements.

// So all we need to do, is to add the 'event' object inside the span click listener,
// and then add a method called 'stopPropagation' (a jQuery method), which will stop the event from bubbling up.
// So, it will fire on the span, but will NOT continue to the <li> click listener (or any others):
$('span').click(function (event) {
  event.stopPropagation();

  // Remove <li> that contains todo.
  // Use 'parent()' (from jQuery) - this will give us the parent element (<li>) of what was clicked (span).
  // Wait for 'fadeOut' to finish before it's removed by giving a duration (500 milliseconds)
  // and a callback function with '.remove()' on the same element that is fading out (the <li>), using 'this':
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});
