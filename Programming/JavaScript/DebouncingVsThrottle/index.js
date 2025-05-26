const input = document.querySelector(".inputContainer > input");
const defaultOutput = document.querySelector("#Default");
const debouncingOutput = document.querySelector("#Debouncing");
const throttleOutput = document.querySelector("#Throttle");

function defaultOutputUpdate(value) {
  defaultOutput.textContent = value;
}

let updateDebounceOutput = debounce((value) => {
  debouncingOutput.textContent = value;
});

let updateThrottleText = throttle((value) => {
  throttleOutput.textContent = value;
});

input.addEventListener("input", () => {
  defaultOutputUpdate(input.value);
  updateDebounceOutput(input.value);
  updateThrottleText(input.value);
});

// Debouncing lets you delay some action until the user “stops doing things”.
// debouncing logic
function debounce(cb, delay = 1000) {
  let timer;

  return (...args) => {
    // this is to ensure that if user will keep typing(specifically no 1 second gap he takes, simultaneously typing), the previous timeout will be cleared, and a new timeout will be set
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// throttle logic
function throttle(cb, delay = 2000) {
  let lastTime = 0;
  let timer = null;

  return (...args) => {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      cb(...args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        cb(...args);
      }, delay - (now - lastTime));
    }
  };
}