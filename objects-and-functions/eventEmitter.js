/* Напишите реализацию EventEmitter. EventEmiitter - это класс, который позволяет
добавлять и удалять обработчики событий, а также выпускать (emit) события */

class EventEmitter {}

const ee = new EventEmitter();
const cb1 = () => console.log("cb1");
const cb2 = () => console.log("cb2");

ee.on("abc", cb1)
  .on("abc", cb2)
  .emit("abc") // cb1, cb2
  .pop("abc")
  .emit("abc"); // cb1
