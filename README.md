# Cart_js
GET ALL HTML ELEMENTS FIRST

Get all plus buttons: document.getElementsByClassName('fa-plus-circle')

Get all minus buttons: document.getElementsByClassName('fa-minus-circle')

Get all quantity displays: document.getElementsByClassName('quantity')

Get all delete buttons: document.getElementsByClassName('fa-trash-alt')

Get all like buttons: document.getElementsByClassName('fa-heart')

Get the total price display: document.querySelector('.total')

SET UP QUANTITY CONTROLS
For plus buttons:

Loop through each plus button

When clicked:

Get current quantity value

Increase it by 1

Update the display

Recalculate total price

For minus buttons:

Loop through each minus button

When clicked:

Get current quantity value

If greater than 0, decrease by 1

Update the display

Recalculate total price

SET UP DELETE FUNCTIONALITY

Loop through each delete button

When clicked:

Find the parent product card

Remove it from the page

Recalculate total price

SET UP LIKE BUTTONS

Loop through each like button

When clicked:

Toggle between red and default color

This visually indicates liked/unliked state

CREATE TOTAL PRICE FUNCTION

Initialize total to 0

Loop through all remaining products:

Get quantity for each

Get price for each

Multiply and add to total

Update total price display

INITIALIZE THE CART

Call total price function when page loads

This sets initial total to 0