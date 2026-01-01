let score = 0;
let time = 30;

const timer = setInterval(() => {
  time--;
  document.getElementById("time").innerText = time;

  if (time <= 0) {
    clearInterval(timer);
    alert("⏰ Time Over! Your Score: " + score);
    location.reload();
  }
}, 1000);

function found() {
  score += 10;
  document.getElementById("score").innerText = score;
  alert("✅ Correct!");
}
