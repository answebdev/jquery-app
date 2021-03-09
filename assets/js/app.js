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

// ISSUE (isse when trying to delete todos - see 'Add Todo' function below).

// 'click()' will only add listeners for EXISTING elements.
// 'on()' will add listeners for all POTENTIAL FUTURE elements.
// So, we need to use 'on()' instead of 'click()',
// because we want those listeners to be listening on ALL POTENTIAL <li>s.

// BUT, we can not just swap and just use 'on('click')' up above - this still won't work.
// What we need to do is to change our code slightly.

// Instead of:
// $('li').click(function () {

// Do this:

// We can only add a listener using jQuery on elements that exist when this code is run the first time.
// And when this code is run the first time, we don't have all the <li>s (since more are added whenever we add todos - initially, we just have 3).
// So, if we just add a click listener to "li" like we did originally (see code above), it will only add to those initial 3.
// So, what we do instead, is add a listener to the ENTIRE ul parent,
// so any time we click on that ul, this listener will fire. EXCEPT, we add a second argument here ("li").
// And what this does, is it says, when an "li" is clicked inside of a "ul", then run this code:

// So we added a listener to an element that exists when the page loads,
// but we're only really listening to the <li>s that are clicked inside of that ul.

// This also needs to be done in the DELETE function (see below).
$('ul').on('click', 'li', function () {
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

// $('span').click(function (event) {

$('ul').on('click', 'span', function (event) {
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

// Add Todo (added when hitting ENTER key)
// Can use 'keypress' or 'on' for ENTER key.

// Select the input - to be more specific, use: input[type='text']
// This will effect all inputs where input[type='text']

$("input[type='text']").keypress(function (event) {
  //   console.log('Key pressed!');
  // Use 'which' property to correspond to the character code of the key that is pressed (code for ENTER key is '13'):
  if (event.which === 13) {
    // console.log('ENTER key pressed!');
    // Grab text of new todo from input (use the '.val' method):
    // console.log($(this).val());
    var todoText = $(this).val();

    // Clear the input
    $(this).val('');

    // Create a new <li> and add it to the ul (use the 'append' method).
    // Use 'append' to append the <li> to the ul.

    // ISSUE
    // HOWEVER, although we add the span with the X, we will not be able to delete the todo when we click on the X.
    // Why?
    // 'click()' will only add listeners for EXISTING elements.
    // 'on()' will add listeners for all POTENTIAL FUTURE elements.
    // So, we need to use 'on()' instead of 'click()',
    // because we want those listeners to be listening on ALL POTENTIAL <li>s.

    // BUT, we can not just swap and just use 'on('click')' up above - this still won't work.
    // What we need to do is to change our code slightly (see above way up at start of Method 2 function).

    $('ul').append(
      '<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>'
    );
  }
});
