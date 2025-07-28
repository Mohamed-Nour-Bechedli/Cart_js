document.addEventListener('DOMContentLoaded', function() {
    
    // Get all necessary elements
    const plusBtns = document.getElementsByClassName('fa-plus-circle');
    const minusBtns = document.getElementsByClassName('fa-minus-circle');
    const deleteBtns = document.getElementsByClassName('fa-trash-alt');
    const likeBtns = document.getElementsByClassName('fa-heart');
    const quantityEls = document.getElementsByClassName('quantity');
    const totalPriceEl = document.querySelector('.total');

    // Quantity adjustment for plus buttons
    for (let i = 0; i < plusBtns.length; i++) {
        plusBtns[i].onclick = function() {
            let currentValue = parseInt(quantityEls[i].textContent);
            quantityEls[i].textContent = currentValue + 1;
            updateTotalPrice();
        };
    }

    // Quantity adjustment for minus buttons
    for (let i = 0; i < minusBtns.length; i++) {
        minusBtns[i].onclick = function() {
            let currentValue = parseInt(quantityEls[i].textContent);
            if (currentValue > 0) {
                quantityEls[i].textContent = currentValue - 1;
                updateTotalPrice();
            }
        };
    }

    // Delete items
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function() {
            this.closest('.card-body').remove();
            updateTotalPrice();
        };
    }

    // Like items
    for (let i = 0; i < likeBtns.length; i++) {
        likeBtns[i].onclick = function() {
            if (this.style.color === 'red') {
                this.style.color = '';
            } else {
                this.style.color = 'red';
            }
        };
    }

    // Function to calculate total price
    function updateTotalPrice() {
        let total = 0;
        const products = document.querySelectorAll('.card-body .card');
        
        for (let i = 0; i < products.length; i++) {
            const quantity = parseInt(products[i].querySelector('.quantity').textContent);
            const unitPriceText = products[i].querySelector('.unit-price').textContent;
            const unitPrice = parseInt(unitPriceText.replace('$', '').trim());
            total += quantity * unitPrice;
        }
        
        totalPriceEl.textContent = total + ' $';
    }

    // Initialize total price
    updateTotalPrice();
});