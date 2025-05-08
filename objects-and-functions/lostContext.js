/* 1/. Выводится undefined, нужно исправить (два способа) */

const user = {
  name: "Alice",
  greet() {
    setTimeout(
      function () {
        console.log(`Hello, ${this.name}`);
      }.bind(this),
      1000
    );
  },
};

const user2 = {
  name: "Alice",
  greet() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

user.greet();
user2.greet();
