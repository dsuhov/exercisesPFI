/* Напишите функцию groupBy, которая группирует объекты по полю */

const people = [
  { name: "Alice", city: "Paris" },
  { name: "Bob", city: "London" },
  { name: "Charlie", city: "Paris" },
];
/*
{
  Paris: [{...}, {...}],
  London: [{...}]
}
*/

function groupBy(arr, key) {
  return arr.reduce(
    (acc, curr) => ({
      ...acc,
      [curr[key]]: [...(acc[curr[key]] || []), { name: curr.name }],
    }),
    {}
  );
}

function groupBy2(arr, key) {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = [...(acc[curr[key]] || []), { name: curr.name }];
    return acc;
  }, {});
}

console.log(groupBy(people, "city"));
console.log(groupBy2(people, "city"));
