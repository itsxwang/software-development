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
  let now;
  return (...args) => {
    // so in throttling we not reset timer, instead we only execute the function if the time gap becomes greater than the delay specified
    now = Date.now();
    if (now - lastTime < delay) {
        let remainingChars = args;
        console.log(remainingChars);
        return;
    }
    lastTime = now;
    cb(...args);
};
}

