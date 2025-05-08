/* Реализуйте функцию throttle(fn, delay), которая вызывает fn не чаще,
чем раз в delay миллисекунд, даже если вызывается чаще. */

function throttle(fn, delay) {
  let lastCalled = 0;

  return (...args) => {
    if (Date.now() - lastCalled >= delay) {
      fn.apply(this, args);
      lastCalled = Date.now();
    }
  };
}

const f = () => console.log("ping");

const throttledF = throttle(f, 500);
throttledF(); // ping
setTimeout(throttledF, 100); // -
setTimeout(throttledF, 600); // ping
