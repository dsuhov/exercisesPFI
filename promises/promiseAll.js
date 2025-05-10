Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const results = [];

    promises.forEach((promise, idx) => {
      promise
        .then((result) => {
          results[idx] = result;
          count++;

          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "wewewewe");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "foo");
});

Promise.myAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log(e));

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "promise4");
});
const promise5 = Promise.reject("error");

Promise.myAll([promise4, promise5])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log("error: ", e));
