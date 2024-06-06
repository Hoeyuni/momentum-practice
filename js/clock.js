const clock = document.querySelector("h2#clock");

function getclock() {
  const today = new Date();
  const hours = today.getHours();
  const pmhours = String(hours - 12).padStart(2, "0");
  const amhours = String(hours).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  if (hours > 12) {
    clock.innerText = `PM ${pmhours}:${minutes}:${seconds}`;
  } else {
    clock.innerText = `AM ${amhours}:${minutes}:${seconds}`;
  }
}

getclock();

setInterval(getclock, 1000);
