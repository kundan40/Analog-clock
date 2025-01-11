let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('min');
let secondHand = document.getElementById('sec');

function updateClock() {
    let now = new Date();
    
    // Get the current hour, minute, second
    let hours = now.getHours() % 12;  // Convert to 12-hour format
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Calculating rotations
    let hourRotation = (hours + minutes / 60) * 30; // 30 degrees per hour
    let minuteRotation = minutes * 6;  // 6 degrees per minute
    let secondRotation = seconds * 6;  // 6 degrees per second

    // Apply rotations
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Call the updateClock function to set the initial time
updateClock();

// Update time every second
setInterval(updateClock, 1000);
