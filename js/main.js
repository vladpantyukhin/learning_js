// Создание переменных
let name = 5;
let str = "10";
let boolean = true;
let boolean2 = false;

// Первый скрипт
let a = 5;
a++; // +1

let b = 4;
b--; // -1

let hello = "Привет, Мир!";
// Вывести последний элемент в строке
console.log(hello[hello.length - 1]);
// Срез данных
sliceSecond = hello.slice(1, 4);
console.log(sliceSecond);
// Смена регистра
regEdit = hello.toUpperCase();
console.log(regEdit);

let text = " СТроКи ";
// Исправление текста
refText = text.toLowerCase().trim();
console.log(refText);
// Конкатенация
concatenText = refText[0].toUpperCase() + refText.slice(1);
console.log(concatenText);

// Логические операции (И, ИЛИ, НЕ РАВНО, СРАВНЕНИЕ)
true && false;
true || false;
false != true;
7 > 3;

/* Еще типы данных:
undefined - переменная не определена
null - пустая переменная
*/

// Перенести текст (или \n) и указать переменую
console.log(`Этот текст
"${hello}" был перенесен`);

// Математические операции
Math.random();
Math.max(1, 29, 13, 4, 12, 7, 8, 11);
Math.pow(2, 5);
Math.sqrt(16); // Извлечь квадратный корень
Math.floor(3.6); // Округлить число в меньшую сторону
Math.ceil(3.2); // Округлить число в большую сторону
Math.round(6.4); // Стандартное округление
Math.trunc(13.6); // Отбросить дробную часть
(4.7584).toFixed(2); // Ограничить число знаков после ,

let q = "5";
console.log(+q + 10); // Сложить строку с числом
