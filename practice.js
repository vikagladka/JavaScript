
// Solution 1
const myString1 = 'developer';
const stringModify = myString1[0].toUpperCase();
console.log(stringModify + myString1.slice(1, 9));

// Solution 2
const myString2 = 'developer';
const capitalFirstLetter = myString2.charAt(0).toUpperCase();
console.log(capitalFirstLetter + myString2.slice(1));

// Solution 3
const myString3 = 'developer';
myNewString = myString3.charAt(0).toLocaleUpperCase() + myString3.substring(1);
console.log(myNewString);

// Solution 4
const myString4 = 'developer';
myNewString2 = myString4[0].toLocaleUpperCase() + myString4.substring(1);
console.log(myNewString2);


// Number Challange
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

var sum = x + y;
//const sumOutput = '${x} + ${y} = ${sum}';
var difference = x - y;
var product = x * y;
var quotient = x / y;
var remainder = x % y;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);


// Array Challange 1
const arr2 = [1, 2, 3, 4, 5];
arr2.unshift(0);
arr2.push(6);
arr2.reverse();
console.log(arr2);




// Array Challange 2

const ar1 = [1, 2, 3, 4, 5];
const ar2 = [5, 6, 7, 8, 9, 10];
ar1.splice(4);
const ar12 = ar1.concat(ar2);
console.log(ar12);


//Object Challenge
// step 1
const library = [
    {
   title: 'Kobsar',
   author: 'Taras Shevchenko',
  status: {
    own: false,
    reading: false,
    read: false
}},

{
    title: 'Kobsar2',
    author: 'Taras Shevchenko2',
   status: {
     own: false,
     reading: false,
     read: false
 }},

 {
    title: 'Kobsar3',
    author: 'Taras Shevchenko3',
   status: {
     own: false,
     reading: false,
     read: false
 }},

];
// step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// step 3




//////////////////////////////////////// Масиви
// Arrays/////////////////////////////////////////

// У front-end розробці масиви часто оголошують за допомогою const

// let: Використовують, коли є потреба перепризначити змінну. Наприклад, якщо масив може змінитися на інший масив у процесі роботи програми:
let arr1 = [1, 2, 3];
arr1 = [4, 5, 6]; // Це дозволено

// var: Використовується рідко у сучасній розробці через проблеми з обмеженнями видимості змінних. Масив можна призначати з використанням var, але let і const зазвичай безпечніші через їхню блочну видимість та контроль змінюваності.

var arr = [1, 2, 3];
arr = [4, 5, 6]; // Це дозволено, але краще використовувати let або const

// const: використовується константа, щоб підкреслити, що сама змінна не змінюватиметься, тобто посилання на масив залишатиметься постійним. Але це не означає, що вміст масиву не можна змінювати. У випадку з масивами, оголошеними через const, ти можеш додавати, видаляти елементи або змінювати їхні значення, проте не можна перепризначити саму змінну на інший масив.

const arr = [1, 2, 3];
arr.push(4); // Це дозволено, бо ми не перепризначаємо масив, а можтфікуєм його за допомогою спеціальних медодів для масиву
arr = [5, 6, 7]; // Це викличе помилку, оскільки змінна оголошена як const


//Ось кілька операцій, які можна виконувати з масивами в JavaScript, і приклади коду для кожної з них:

1. Додавання елементів
Операція: push()
Опис: Додає елемент(-и) в кінець масиву:

const arr = [1, 2, 3];
arr.push(4); // Додаємо елемент 4
console.log(arr); // [1, 2, 3, 4]


Операція: unshift()
Опис: Додає елемент(-и) на початок масиву:

const arr = [1, 2, 3];
arr.unshift(0); // Додаємо елемент 0 на початок
console.log(arr); // [0, 1, 2, 3]

2. Видалення елементів

Операція: pop()
Опис: Видаляє останній елемент масиву:

const arr = [1, 2, 3];
arr.pop(); // Видаляємо останній елемент
console.log(arr); // [1, 2]



















