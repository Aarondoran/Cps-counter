let clicks = 0;
let startTime = new Date().getTime();

function updateClicks() {
  clicks++;
  document.getElementById("cps").innerText = (clicks / ((new Date().getTime() - startTime) / 1000)).toFixed(2);
}

function redirectToGoogle() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

document.addEventListener("click", function() {
  updateClicks();
  if ((new Date().getTime() - startTime) / 1000 >= 10) {
    redirectToGoogle();
  }
});

setInterval(function() {
  document.getElementById("time").innerText = Math.floor((new Date().getTime() - startTime) / 1000);
}, 1000);
