document.addEventListener('DOMContentLoaded', function () {
    // Function to get query parameters from the URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the selected time and date from the URL
    const selectedTime = getQueryParam('time');
    const selectedDate = getQueryParam('date');

    // Display the selected time and date on the page
    if (selectedTime) {
        document.getElementById('showtime').textContent = selectedTime;
    }
    if (selectedDate) {
        document.getElementById('showdate').textContent = selectedDate;
    }
});

// Ticket prices for different types
const ticketPrices = {
    standard: 300.00,
    imax: 500.00,
    vip: 700.00
};

// Function to update ticket type, cost, and subtotal
function updateTicketDetails(type) {
    const ticketTypeElement = document.getElementById('ticket-type');
    const ticketCostElement = document.getElementById('ticket-cost');
    const quantity = parseInt(document.getElementById('quantity').innerText);
    
    // Update ticket type and cost based on the selected type
    ticketTypeElement.innerText = type.toUpperCase();
    ticketCostElement.innerText = ticketPrices[type].toFixed(2);

    // Update subtotal based on quantity and new cost
    const subtotal = ticketPrices[type] * quantity;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
}

// Event listeners for ticket type buttons
document.querySelector('.ticket-btn.standard').addEventListener('click', function () {
    updateTicketDetails('standard');
});

document.querySelector('.ticket-btn.imax').addEventListener('click', function () {
    updateTicketDetails('imax');
});

document.querySelector('.ticket-btn.vip').addEventListener('click', function () {
    updateTicketDetails('vip');
});

// Quantity control functionality
document.getElementById('increase').addEventListener('click', function () {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    let currentCost = parseFloat(document.getElementById('ticket-cost').innerText);
    quantity++;
    document.getElementById('quantity').innerText = quantity;
    document.getElementById('subtotal').innerText = (quantity * currentCost).toFixed(2);
});

document.getElementById('decrease').addEventListener('click', function () {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    let currentCost = parseFloat(document.getElementById('ticket-cost').innerText);
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
        document.getElementById('subtotal').innerText = (quantity * currentCost).toFixed(2);
    }
});
