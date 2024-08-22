function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the current display value
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Clear the display
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || 0; // Calculate the result
    } catch (error) {
        display.value = 'Error'; // Display 'Error' if the calculation fails
    }
}
