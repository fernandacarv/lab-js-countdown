const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

//const screenTimer = document.getElementById("timer");

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const interval = setInterval(() => {
    startButton.disabled = true;
    remainingTime -= 1;
    document.getElementById("time").innerHTML = `${remainingTime}`;

    if (remainingTime === 0) {
      clearInterval(interval);
      showToast();
    }}, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastId = document.getElementById('toast');
  toastId.classList.add('show');

  const toastTimeout = setTimeout(() => {
    toastId.classList.remove('show');
    document.getElementById('close-toast').addEventListener("click", toastId.classList.remove('show'));
  }, 3000) 



}
