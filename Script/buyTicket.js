document.addEventListener('DOMContentLoaded', function () {
    let selectedTime = null; // To store the selected time

    // Function to handle the time button click
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the active state from all buttons
            timeButtons.forEach(btn => btn.style.backgroundColor = '#000A1F');
            timeButtons.forEach(btn => btn.style.color = '#FFFFFF');

            // Set the clicked button's background to red
            this.style.backgroundColor = 'red';
            this.style.color = '#000A1F';

            // Store the selected time
            selectedTime = this.textContent.trim();
        });
    });

    // Handle "BUY TICKET" button click
    const buyTicketButtons = document.querySelectorAll('.buy-ticket-btn');
    buyTicketButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (selectedTime) {
                // Redirect to BookTicket.html and pass the selected time as a query parameter
                window.location.href = `BookTicket.html?time=${encodeURIComponent(selectedTime)}`;
            } else {
                alert('Please select a time before proceeding.');
            }
        });
    });
});
