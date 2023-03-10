// Циклы

// While
let count = 0;
while (count < 10) {
  console.log(count);
  if (count == 5) {
    break;
  }
  count++;
}

// Do While (выполняет код 1 раз)
let num = 10;
do {
  console.log(num);
  num--;
} while (num >= 7);

// For (выполняет код выбранное кол-во раз)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Пример работы с массивом через цикл for
let arr2 = [5, 8, 9, 12, 43, 2];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i] * 2);
}

// For Of
let arr3 = [5, 8, 9, 12, 43, 2];
for (let item of arr3) {
  console.log(item);
}

// For In (применять только к объектам)
let obj = {
  name: "Dmitry",
  age: 37,
  number: 89233234200,
};
for (let key in obj) {
  console.log(`Ключ: ${key} | Значение: ${obj[key]}`);
}

// Метод For Each
let arr4 = [5, 8, 9, 12, 43, 2];
arr4.forEach(function (item, i, array) {
  console.log(`Элемент: ${item}
  Индекс: ${i}
  Исходный массив: ${array}`);
});

/* Метод Find (нашли 3-й элемент)
findIndex для вывода индекса
filter для вывода выборки (прим. item.id < 3)
*/
let people = [
  { id: 1, name: "Misha" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ivan" },
  { id: 4, name: "Petr" },
  { id: 5, name: "Venya" },
];
let a = people.find(function (item) {
  if (item.id == 3) return item;
});
console.log(a);

// Метод Map
let arr = [5, 8, 9, 12, 43, 2];
let newArr = arr.map(function (item) {
  return item * 3;
});
console.log(newArr);
