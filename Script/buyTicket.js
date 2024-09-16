document.addEventListener('DOMContentLoaded', function () {
    let selectedShowtime = { time: null, date: null}; // To store the selected time and date

    // Function to handle the time button click
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            // Remove the active state from all buttons
            timeButtons.forEach(btn => {
                btn.style.backgroundColor = '#000A1F';
                btn.style.color = '#FFFFFF';
                btn.classList.remove('selected');
            });

            // Set the clicked button's background to red and add 'selected' class
            this.style.backgroundColor = 'red';
            this.style.color = '#FFFFFF';
            this.classList.add('selected');

            // Get the time and date from the clicked button's data attributes
            selectedShowtime.time = this.getAttribute('data-time');
            selectedShowtime.date = this.getAttribute('data-date');
        });
    });

    // Handle "BUY TICKET" button click
    const buyTicketButtons = document.querySelectorAll('.buy-ticket-btn');
    buyTicketButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (selectedShowtime.time && selectedShowtime.date) {
                window.location.href = `/Pages/bookTicket.html?time=${encodeURIComponent(selectedShowtime.time)}&date=${encodeURIComponent(selectedShowtime.date)}`;
            } else {
                alert('Please select a showtime before proceeding.');
            }
        });
    });

    // Handle clicks outside the time buttons to reset the selection
    document.addEventListener('click', function () {
        // Reset the style of all buttons
        timeButtons.forEach(btn => {
            btn.style.backgroundColor = '#000A1F';
            btn.style.color = '#FFFFFF';
        });

        // Clear the selected showtime
        selectedShowtime.time = null;
        selectedShowtime.date = null;
    });
});
