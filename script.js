let shift = false;

function appendValue(value) {
  if (shift && value === 'Math.pow(') {
    value = 'Math.sqrt('; // Example of shift effect
  }
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function toggleShift() {
  shift = !shift;
  alert(shift ? "Shift ON" : "Shift OFF");

}

function changeBackground(color) {
  const calculator = document.getElementById('calculator');
  const buttons = document.querySelectorAll('#buttons button, #colorButtons button');

  // Set background color
  calculator.style.backgroundColor = color;

  // Set button styles
  buttons.forEach(button => {
    if (color === 'black') {
      button.style.backgroundColor = '#333';
      button.style.color = '#fff';
    } else {
      button.style.backgroundColor = '#007bff';
      button.style.color = '#000';
    }
  });
}

