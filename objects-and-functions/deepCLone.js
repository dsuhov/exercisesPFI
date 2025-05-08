/* 2. Напишите глубокое копирование объекта */

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
  },
  coo: [1, "d3", 3, { aa: "sdf" }],
};

// function deepClone1(obj) {
//   return structuredClone(obj);
// }

// function deepClone2(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

function deepClone3(obj) {
  const newObj = {};

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      newObj[key] = deepClone3(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}
// посовещался с ИИ и увидел, что не учёл массивы

// версия после совещания с ИИ:
function deepClone4(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];

    for (let i of obj) {
      arrCopy.push(deepClone4(i));
    }

    return arrCopy;
  }

  const newObj = {};

  for (let key in obj) {
    const value = obj[key];

    newObj[key] = deepClone4(value);
  }

  return newObj;
}

console.log(deepClone4(obj2)); //
