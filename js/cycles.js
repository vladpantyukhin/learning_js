// Циклы
// While
// let count = 0;
// while (count < 10) {
//   console.log(count);
//   if (count == 5) {
//     break;
//   }
//   count++;
// }
// Do While (выполняет код 1 раз)
// let num = 10;
// do {
//   console.log(num);
//   num--;
// } while (num >= 7);
// For (выполняет код выбранное кол-во раз)
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// Пример работы с массивом через цикл for
// let arr = [5, 8, 9, 12, 43, 2];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }
// For Of
// let arr2 = [5, 8, 9, 12, 43, 2];
// for (let item of arr2) {
//   console.log(item);
// }
// For In (применять только к объектам)
let obj = {
  name: "Dmitry",
  age: 37,
  number: 89233234200,
};
for (let key in obj) {
  console.log(`Ключ: ${key} | Значение: ${obj[key]}`);
}
