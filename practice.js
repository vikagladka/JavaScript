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


//JavaScript Switch Statement

const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'Invalid Operator';
  }
  console.log(result);
  return result;
};

calculator(5, 2, '-');



// Instructions:

// . Print/log the numbers from 1 to 100
// . For multiples of three print "Fizz" instead of the
// number
// . For multiples of five print "Buzz"
// . For numbers which are multiples of both three and
// five print "FizzBuzz". 

// варіант 1 рішення:

for (let i = 1; i <= 100; i++) {
 
  if (i % 3 === 0 && i % 5 === 0){
      console.log('Fizz');
  } else if(i % 5 ===0){
    console.log('Buzz');
  }else if(i % 3 === 0){
     console.log('FizzBuzz');
  } else{ console.log(i);
  };
}

// варіант 2 рішення:


for (let i = 1; i <= 100; i++) {
  let output = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
               (i % 3 === 0) ? 'Fizz' :
               (i % 5 === 0) ? 'Buzz' : i;
  console.log(output);
}


// Приклад циклу  for ... in

const object = {a: 1, b: 2, c: 3};

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



// 1 виправити баг щоб функція запрацювала:
const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [];
 
for(let i = 0; i < arr1.lenght; i++) {
    if (arr1[i].lenght) {
        for(let j = 0; j < i.lenght; j++) {
            arr2.push(i[j]);
        }
    } else {
        arr2.push(arr1[i]);
    }
}
 
console.log('arr2', arr2);

//розвязка 1:

const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  //
  if (Array.isArray(arr1[i])) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr2.push(arr1[i[j]]);
    }
  } else {
    arr2.push(arr1[i])
  }
}
console.log('arr2', arr2);


//arr2 Array(5) [ 0, 1, 2, undefined, undefined ] --> не робе ЯК ТРЕБА, КУРВА 

//розвязка 2:

const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (Array.isArray(arr1[i])) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr2.push(arr1[i][j]);
    }
  } else {
    arr2.push(arr1[i])
  }
}
console.log('arr2', arr2);

//arr2 Array(5) [ 0, 1, 2, 3, 4 ] ---> ОЦЕ ВЖЕ ГУД ПРАЦЮЄ, МАСИВ ПЛАСКИЙ ЯК ЗВИВИНИ МОЄЇ КОЛИШНЬОЇ ПОДРУГИ

// 2  зробити з багатовимірних масивів - одновимірні, не використовуючи готові методи, а використовуютьчи тільки цикл for:

const arr1 = [0, 1, 2, [3, 4, [5, 6]]];
const arr2 = [0, 1, 2, [3, 4, [5, 6], [7, 8]]];

//Вирішення 1  - не робеее...
const arr = [0, 1, 2, [3, 4, [5, 6]]];
const flatArr = [];

for (a = 0; a < arr.length; a++) {
  if (Array.isArray(arr[a])) {

    for (b = 0; b < arr[a].length; b++) {
      flatArr.push(arr[a][b]);
      if (Array.isArray(arr[a][b])) {
        for (c = 0; b < arr[b].length; c++) {
          flatArr.push(arr[a][b][c]);
        } 
        }
      }
    }else {
          flatArr.push(arr[a]);
  }
  console.log('flatArr', flatArr);
}
//flatArr 
// Array [ 0 ]
// debugger eval code:18:11
// flatArr 
// Array [ 0, 1 ]
// debugger eval code:18:11
// flatArr 
// Array(3) [ 0, 1, 2 ]
// debugger eval code:18:11
// flatArr 
// Array(6) [ 0, 1, 2, 3, 4, (2) […] ]
// debugger eval code:18:11
// undefined 

//Вирішення 2  - не робеее...

const arr = [0, 1, 2, [3, 4, [5, 6]]];
const flatArr = [];

for (a = 0; a < arr.length; a++) {
  if (Array.isArray(arr[a])) {
    for (b = 0; b < arr[a].length; b++) {
      flatArr.push(arr[b]);
    }
  } else if (Array.isArray(arr[b])) {
    for (c = 0; c < arr[b].length; c++) {
      flatArr.push(arr[c]);

    }
  } else {
    flatArr.push(arr[a]);
  }
}
console.log('flatArr', flatArr);
//Uncaught ReferenceError: b is not defined


//Вирішення 3  - курва не робеее...

const arr = [0, 1, 2, [3, 4, [5, 6]]];
const flatArr = [];

for (let a = 0; a < arr.length; a++) {
 Array.isArray(arr[a]) ?  for (let b = 0; b < arr[a].length; b++) { flatArr.push(arr[a][b]);} :    
 Array.isArray(arr[a]) ? for (let b = 0; b < arr[a].length; b++) { flatArr.push(arr[a][b]);} :
 Array.isArray(arr[a][b]) ? for (let c = 0; c < arr[a][b].length; c++) {flatArr.push(arr[a][b][c]);} :
 Array.isArray(arr[a][b][c]) ? {for (let d = 0; d < arr[a][b][c].length; d++) {flatArr.push(arr[a][b][c][d]);} :
 flatArr.push(arr[a]);}}
console.log('flatArr', flatArr);
//Uncaught SyntaxError: expected expression, got keyword 'for'

//Вирішення 4  - ок

function flatArrFunction(array){
  for (i=0; i<array.length; i++){
    Array.isArray(array[i]) ? flatArrFunction(array[i]) : EmptyArray.push(array[i]);
  }
}

flatArrFunction(arr1);
console.log('flatArr:', EmptyArray);
flatArrFunction(arr2);
console.log('flatArr:', EmptyArray);

// flatArr: 
// Array(7) [ 0, 1, 2, 3, 4, 5, 6 ]

// flatArr: 
// Array(16) [ 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, … ]

//Вирішення 5  - ок. 
//Ця функція flattenArray призначена для "розплющення" багаторівневих масивів Усередині циклу перевіряється, чи є поточний елемент масиву arr[i] також масивом. Це робиться за допомогою оператора instanceof Array. Якщо елемент є масивом:
//Використовується метод splice для видалення поточного елемента (вкладеного масиву) та вставки на його місце всіх елементів цього вкладеного масиву. Метод apply використовується для того, щоб передати аргументи методу splice як масив. Аргументи [i, 1] вказують, що з індексу i потрібно видалити 1 елемент.
//Метод concat використовується для об'єднання масиву [i, 1] з елементами вкладеного масиву. Змінна i зменшується на 1, оскільки після видалення одного елемента і вставки кількох нових елементів, наступний елемент буде знаходитися на попередньому індексі:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//Функція може бути не ефективною для дуже великих і глибоко вкладених масивів, оскільки кожне об'єднання масивів може призводити до перекопіювання елементів:



function flattenArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      Array.prototype.splice.apply(arr, [i, 1].concat(arr[i]));
      i--;
    }
  }

  return arr;
}
console.log(flattenArray(arr1)); //

//Вирішення 6 - ок. 

//Логіка:
//Якщо елемент масиву є масивом, рекурсивно викликаємо функцію для цього підмасиву.
//Результат рекурсивного виклику додаємо до результуючого масиву.
//Якщо елемент не є масивом, додаємо його до результуючого масиву.

const arr1 = [0, 1, 2, [3, 4, [5, 6]]];
const arr2 = [0, 1, 2, [3, 4, [5, 6, [7, 8], [71, 81]], [72, [73, 83], 84]]];


function flattenArrayRecursive(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArrayRecursive(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenArrayRecursive(arr2)); //0:0
//0:0
// 1:1
// 2:2
// 3:3
// 4:4
// 5:5
// 6:6
// 7:7
// 8:8
// 9:71
// 10:81
// 11:72
// 12:73
// 13:83
// 14:84


// Завдання №3 :написати свою власну функцію - незалежно скільки рівнів має масив:
function transformArray(arr) {
  .....
  return newArr;
}

const arr2 = transformArray(arr1);
console.log('arr2', arr2);

// Рішення 1

const arr1 = [0, 1, 2, [3, 4, [5, 6]]];
const arr2 = [0, 1, 2, [3, 4, [5, 6], [7, 8]]];
const arr = [0, 1, 2, [3, 4, [5, 6]]];
const flatArr = [];

function flatArrFun(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArrFun(array[i]); 
    } else {
      flatArr.push(array[i]); 
    }
  }
}

flatArrFun(arr);
console.log('flatArr:', flatArr);

flatArrFun(arr1);
console.log('flatArr:', flatArr);

flatArrFun(arr2);
console.log('flatArr:', flatArr);


//Сплющення масиву за допомогою методів concat() та push():


function flat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          result = result.concat(flat(arr[i]));
      } else {
          result.push(arr[i]);
      }
  }
  return result;
}

//The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
console.log(flat(arr1));
console.log(flat(arr2));
console.log(flat(arr3));