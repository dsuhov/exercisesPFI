/*
Реализуйте функцию debounce(fn, delay), которая откладывает вызов функции fn на время delay с последнего вызова
Выводится undefined, нужно исправить (два способа)
*/

function debounce(fn, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // fn(...args);
      fn.apply(this, args);
    }, delay);
  };
}

const f = () => console.log("ping");
const debouncedF = debounce(f, 500);

debouncedF(); // -
debouncedF(); // -
debouncedF(); // спустя 500мс - ping
