let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});


function goBack() {
            // This will take the user back to the previous page in their history
            window.history.back();
            
            // Alternatively, you can specify a specific URL:
            // window.location.href = "https://example.com/previous-page";
        }