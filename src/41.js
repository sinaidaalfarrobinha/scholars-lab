// Example 1: Console log or alert function
console.log("Hello, world!");

// Example 2: Fetch data using XMLHttpRequest
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));

// Example 3: Create a modal for user interaction
const modal = document.createElement('div');
modal.classList.add('modal', 'animated');
document.body.appendChild(modal);

// Example 4: Handle form submission with event listener
form.addEventListener('submit', e => {
    e.preventDefault();
    // Handle form submission logic here
});

// Example 5: Initialize and add a slider to the webpage
const slider = document.getElementById('mySlider');
slider.addEventListener('input', function() {
    const targetValue = slider.value;
    if (targetValue < this.minValue) {
        this.value = this.minValue;
    } else if (targetValue > this.maxValue) {
        this.value = this.maxValue;
    }
});

// Example 6: Use a custom event to trigger an action
addEventListener('customEvent', function(event) {
    console.log("Custom event received:", event);
});
