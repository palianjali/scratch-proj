let display = document.getElementById("display");

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

// let count = 0;

// function increment(){
//   count +=2 ;
//   document.getElementById('counter').innerText=count;
// }
// function decrement(){
//   count-- ;
//   document.getElementById('counter').innerText=count;
// }
