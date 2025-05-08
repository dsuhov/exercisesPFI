/* Напишите реализацию EventEmitter. EventEmiitter - это класс, который позволяет
добавлять и удалять обработчики событий, а также выпускать (emit) события */

class EventEmitter {
  events = new Map();

  on(evtName, fn) {
    const event = this.events.get(evtName);

    if (event) {
      event.push(fn);
    } else {
      this.events.set(evtName, [fn]);
    }

    return this;
  }

  emit(evtName) {
    this.events.get(evtName)?.forEach((fn) => {
      fn();
    });

    return this;
  }

  pop(evtName) {
    const event = this.events.get(evtName);

    if (event) {
      event.pop();

      if (event.length === 0) {
        this.events.delete(evtName);
      }
    }

    return this;
  }
}

const ee = new EventEmitter();

const cb1 = () => console.log("cb1");
const cb2 = () => console.log("cb2");

ee.on("abc", cb1)
  .on("abc", cb2)
  .emit("abc") // cb1, cb2
  .pop("abc")
  .emit("abc"); // cb1
