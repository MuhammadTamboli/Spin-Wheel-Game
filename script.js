// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to update the number boxes with random colors
  function updateColors() {
    const numberBoxes = document.querySelectorAll('.mm');
  
    numberBoxes.forEach(box => {
      box.style.backgroundColor = getRandomColor();
    });
  }
  
  // Variables to store user input and credit
  let userNumber = null;
  let userCredit = null;
  
  // Function to handle number button click
  function handleNumberClick(event) {
    userNumber = event.target.previousElementSibling.textContent;
    document.getElementById('in').textContent = userNumber;
  }
  
  // Function to handle credit button click
  function handleCreditClick(event) {
    userCredit = event.target.textContent;
    document.getElementById('in2').textContent = userCredit;
  }
  
  // Function to handle spin button click
  function handleSpinClick() {
    if (userNumber === null || userCredit === null) {
      alert('Please select a number and add credit before spinning.');
      return;
    }
  
    // Spin the wheel
    const wheel = document.querySelector('.spin img');
    const spinResult = Math.floor(Math.random() * 10);
    const rotation = 360 * 3 + spinResult * 36; // 3 full rotations + result rotation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;
  
    // Display result after spin
    setTimeout(() => {
      if (spinResult == userNumber) {
        document.getElementById('in1').textContent = 'WIN';
      } else {
        document.getElementById('in1').textContent = 'LOSE';
      }
    }, 4000); // Wait for the spin to complete
  }
  
  // Function to handle cancel button click
  function handleCancelClick() {
    userNumber = null;
    userCredit = null;
    document.getElementById('in').textContent = '';
    document.getElementById('in1').textContent = '';
    document.getElementById('in2').textContent = '';
  }
  
  // Function to handle double button click
  function handleDoubleClick() {
    if (userCredit !== null) {
      userCredit *= 2;
      document.getElementById('in2').textContent = userCredit;
    }
  }
  
  // Function to handle reset button click
  function handleResetClick() {
    handleCancelClick();
  }
  
  // Function to handle clear button click
  function handleClearClick() {
    document.getElementById('in1').textContent = '';
  }
  
  // Adding event listeners to buttons
  document.querySelectorAll('.btn .nn').forEach(button => {
    button.addEventListener('click', handleNumberClick);
  });
  
  document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', handleCreditClick);
  });
  
  document.querySelector('.spin').addEventListener('click', handleSpinClick);
  document.querySelector('.end-num:nth-child(1)').addEventListener('click', handleCancelClick);
  document.querySelector('.end-num:nth-child(2)').addEventListener('click', handleDoubleClick);
  document.querySelector('.end-num:nth-child(3)').addEventListener('click', handleResetClick);
  document.querySelector('.end-num:nth-child(4)').addEventListener('click', handleClearClick);
  
  // Initial call to update colors
  updateColors();
  