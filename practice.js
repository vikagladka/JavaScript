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
const library = [{
    title: 'Kobsar',
    author: 'Taras Shevchenko',
    status: {
      own: false,
      reading: false,
      read: false
    }
  },

  {
    title: 'Kobsar2',
    author: 'Taras Shevchenko2',
    status: {
      own: false,
      reading: false,
      read: false
    }
  },

  {
    title: 'Kobsar3',
    author: 'Taras Shevchenko3',
    status: {
      own: false,
      reading: false,
      read: false
    }
  },

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

// 1. Додавання елементів
//Операція: push()
// Опис: Додає елемент(-и) в кінець масиву:

  const arr = [1, 2, 3];
arr.push(4); // Додаємо елемент 4
console.log(arr); // [1, 2, 3, 4]


// Операція: unshift()
// Опис: Додає елемент(-и) на початок масиву:

  const arr = [1, 2, 3];
arr.unshift(0); // Додаємо елемент 0 на початок
console.log(arr); // [0, 1, 2, 3]

// 2. Видалення елементів

// Операція: pop()
// Опис: Видаляє останній елемент масиву:

  const arr = [1, 2, 3];
arr.pop(); // Видаляємо останній елемент
console.log(arr); // [1, 2]

// Операція: shift()
// Опис: Видаляє перший елемент масиву:

const arr = [1, 2, 3];
arr.shift(); // Видаляємо перший елемент
console.log(arr); // [2, 3]


//***************************


//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//Examples:
//Input: 42145 Output: 54421
//Input: 145263 Output: 654321

function descendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''), 10);
}
// How it works:
// n.toString() converts the number into a string.
// .split('') converts the string into an array of individual digits.
// .sort((a, b) => b - a) sorts the array in descending order.
// .join('') joins the sorted array back into a string.
// parseInt(..., 10) converts the string back into an integer.

//***************************

// mplement the js function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. 

// For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Here's the implementation:

function uniqueInOrder(seq) {
  const result = [];
  let previous;

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] !== previous) {
      result.push(seq[i]);
      previous = seq[i];
    }
  }

  return result;
}


// To implement the uniqueInOrder function in JavaScript, we'll iterate through the given sequence and compare each element with the previous one. If the current element is different from the previous one, we'll add it to the result array. This approach ensures that we eliminate consecutive duplicates while preserving the original order.
// Here's the implementation:


function uniqueInOrder(seq) {
  const result = [];
  let previous;

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] !== previous) {
      result.push(seq[i]);
      previous = seq[i];
    }
  }

  return result;
}
// Explanation:

// Initialization:

// We initialize an empty array result to store the unique elements.
// We use a variable previous to keep track of the previous element in the sequence.
// Iteration:

// We loop through each element in the sequence using a for loop.
// We compare the current element seq[i] with the previous element.
// If they are not the same, we push the current element into the result array.
// We then update the previous variable to the current element.
// Return:

// After the loop completes, we return the result array containing the unique elements.


//*********************************************

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends) {
  return friends.filter(names => names.length === 4);
}
//*****************************************************/
// a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(item => typeof item === 'number' && item >= 0);
}

//*****************************************************/


// Задачі від ChatGPT ----1 //


//Задача 1: Створи масив чисел від 1 до 10. Використовуючи метод масиву, виведи у консоль всі парні числа з цього масиву(filter)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(number => number % 2 === 0);
console.log(evens);


//Задача 2 : Додай до цього масиву ще одне ім'я "Андрій" на початок і "Світлана" в кінець(unshift, push).

const names = ["Олена", "Іван", "Марія", "Петро", "Наталія"];
names.unshift("Андрій");
names.push("Світлана");
console.log(names);

//Задача 3 : Знайди суму всіх чисел в цьому масиві.

const numbers = [3, 6, 2, 9, 4];
const arraySum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
return arraySum;

//Задача 4 : Створи функцію, яка приймає масив чисел і повертає новий масив, в якому всі числа помножені на 2.

function multuplyByTwo (array){
  return array.map(arrayElement => arrayElement * 2);
}

//Задача 5 : Виведи в консоль імена всіх користувачів старших за 26 років.

const users = [
  { name: "Олена", age: 25 },
  { name: "Іван", age: 30 },
  { name: "Марія", age: 28 },
];

const olderThan26 = users.filter(user => user.age > 26).map(user => user.name);
console.log(olderThan26);


//Задача 6 : Знайди перше число в масиві, яке більше за 10.
const numbers = [5, 12, 8, 130, 44]; 
const iteration = numbers.find(number => number > 10);
console.log(iteration);

//Задача 7: Відсортуй цей масив в алфавітному порядку.
const words = ["яблуко", "банан", "ананас", "абрикос", "авокадо"];
const abcOrder = words.sort();
console.log(abcOrder);

//Задача 8:Створи масив чисел від 1 до 100. Видали з цього масиву всі числа, які діляться на 3.
const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
//видалення чисел що діялться на 3
// const divideByThree = 
const filteredNumbers = numbers.filter(number => number % 3 !== 0 );
console.log(filteredNumbers);

//Задача 9: Перетвори масив в одномірний масив: [1, 2, 3, 4, 5].
const arr = [1, [2, [3, [4, [5]]]]];
const arrFlat = arr.flat(4);
console.log(arrFlat);

//Задача 10 : Є масив об'єктів товарів: Знайди середню ціну всіх товарів.
const products = [
  { name: "Телефон", price: 10000 },
  { name: "Ноутбук", price: 25000 },
  { name: "Планшет", price: 15000 },
  { name: "Монітор", price: 7000 },
];

const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
const averagePrice = totalPrice / products.length;
console.log(averagePrice);


// Задачі від ChatGPT ---- 2 //

//Задачі по масивах:

//Задача 2.1 :Є масив чисел: const numbers = [10, 5, 12, 8, 7, 3, 9, 6]; найди максимальне та мінімальне число в цьому масиві.

const numberrs = [10, 5, 12, 8, 7, 3, 9, 6]; 
const max = Math.max(...array);
const min = Math.min(...array);
console.log('Максимальне число: ${max}');
console.log('Мінімальне число: ${min}');


//Деконструктиризація


// Завдання 1: Деструктуризація масиву
// У вас є масив з трьох чисел. Використайте деструктуризацію, щоб витягнути перше і третє число в окремі змінні.

const numbers3 = [10, 20, 30]
const [first, , third] = numbers3;
console.log(first); 
console.log(third); 


// Завдання 2: Деструктуризація об'єкта
// У вас є об'єкт, що містить інформацію про книгу. Використайте деструктуризацію, щоб витягнути назву та автора книги в окремі змінні.

const book = {
  title: '1984',
  author: 'George Orwell',
  year: 1949,
};

const { title, author } = book;
console.log(title);  // '1984'
console.log(author); // 'George Orwell'


// Завдання 3: Деструктуризація з параметрами функції
// Створіть функцію, яка приймає об'єкт з інформацією про автомобіль (марка, модель, рік) і виводить цю інформацію в консоль, використовуючи деструктуризацію.

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
};

function carDes({make, model, year}) {
  console.log(`Car Make: ${make}`);
  console.log(`Car Model: ${model}`);
  console.log(`Car Year: ${year}`);
}
carDes(car);// Виведе інформацію про автомобіль


// Завдання 4: Деструктуризація в масиві об'єктів
// У вас є масив об'єктів, кожен з яких містить інформацію про людину (ім'я та вік). Використайте деструктуризацію, щоб вивести ім'я та вік кожної людини в консоль.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

people.forEach(({name, age}) => {
  console.log(`Ім'я: ${name}; Вік: ${age}`);
}
);

// Завдання 5: Додаткове (за бажанням)
// Спробуйте деструктуризувати значення з масиву, присвоївши їм значення за замовчуванням, якщо вони не існують.

const values = [1, 2];


const [first1, second2, third3 = 3] = values;

console.log(first); 
console.log(second);

console.log(third);






