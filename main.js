'use strict';

// variable

// * console.log(name);

// console.log(name);

// ! var
// var name = 'John'; - которая не используется совсем еще с 2015 года.
// let name = 'Mike'; - которая часто используется в циклах или не инициализированых переменных.
// const name; - переменная которая не изменяется в течение выполнения кода , используется в 95% случаев.

// name = 'John';
// console.log(name);

///////////////////////////////////////////////////////----------------------////////////////////////////////
//? Переопределение переменных

// let firestName = 'John';

// firestName = 'Mike';

// console.log(firestName);

// var age = 23;
// var message = 'Hello world';

// "" '' |  ``  |

// Имена переменных

// let _ = 'kek';
// let $ = 'lol';

// ! Cases
// userName , userChoose , isDrunk
// user_name , user_choose , is_drunk
// NAME , USER_CHOOSE , IS_DRUNK
// _name , _age
// UserName , UserChoose , IsDrunk

// ! DATA TYPES
// ? Number

// const intNum = 23;
// const floatNum = 23.23;

// console.log('[intNum]', intNum);
// console.log('[floatNum]', floatNum);

// Special number value

// console.log((1 / 0) * -1); //Infinity
// console.log('Hello world' / 3);

// console.log('[Infinity]', Infinity);
// console.log('[-Infinity]', -Infinity);
// console.log('[NaN]', NaN);

// BigInt
// const bigInt = 1234567890123456789012345678901234567893456n ;

// ! String
// const str = 'Hello everybody';
// const str1 = "Hello everybody";
// const str2 = `Hello 13 + 10 = ${intNum}`;

// console.log('[str2]', str2);

// ! NULL
// ! Nothing
// let age = null;

// console.log('[age]', age);

// !Undefined
// let age;

// ! boolean -> true || false
// let isWasted = true; // 1
// let isFrunk = false; // 0

// console.log(true + 1);

// console.log('[age]', age);

// object
// const header = {
//     buttons: 'John',
//     age: 23,
//     money: 13.13
// };
// header.age = 25;
// console.log(header.age);

// const price = 100;
// const additionalPartOfPrice = '500';

// console.log(price + additionalPartOfPrice);

//! Func form the box
// alert - модал
// prompt - дилог окно
// confirm - модал (с усл.)
// const message = alert('Hello world');

// const greeting = prompt('Hello , glad to see you , enter your name '); // ! Str

// console.log('[greeting]', greeting);
// console.log('[NUMBER]', 23);

// const isQuit = confirm('Do u wonna quit ? ');
// console.log('[isQuit]', isQuit);

// ! Math operator

// console.log(9 + 23);
// console.log(6 - 13);
// console.log(12 * 32);
// console.log(32 / 32);
// console.log(33 % 32);

// ! logic operator
// console.log(4 < 3);
// console.log(4 >= 3);
// console.log(14 < 3);
// console.log(11 == 3);
// console.log(11 === 3);

// & , | , || , &&

// typeof
// console.log(typeof 'something');

// ???
// console.log(Math.PI);

// let strNum = '963';
// const result = +strNum + 1200;

// console.log(6 == 6);
// console.log('6' === 6);
// console.log('6' + 100);

// Condiitonal
// |
// |

// const age = prompt('Hello , how old are u ?');

// False

// Falsy

// if ({}) {
//     console.log('Okay');
// }
// else if (age > 17) {
//     console.log('Good');
// } else {
//     console.log('Not okay');
// }
//!  Kostya + 1 + 1 + 1 + 2 , Dima + 1 , Kirill  + 1;

// Guess the number

// через промпт узнать у пользователя число и сравнить его с тем числом ,что загадали мы
// магическое число должно быть загадано заранее
// если число равно тому , что мы загадали - мы поздравляем пользователя ,а если нет - неты

// const magicNumber = 13;

// const userNum = prompt('Guess the number - ');

// () - условие || выражение
// {} - тело условие в котором выполняется код при условии того,что условие является правдой

//! Использовать когда перед нами стоит задаса с диапазонами

// if (magicNumber === +userNum) {
//     console.log('Good ');
// } else if (magicNumber < +userNum) {
//     console.log('Ur number bigger than mine ');
// } else if (magicNumber > +userNum) {
//     console.log('Ur number less than mine ');
// } else {
//     console.log('WTH?');
// }

// if (age > 17) {
//     console.log('Good');
// } else if (age < 17) {
//     console.log('Not good');
// } else {
//     console.log('You are or 17 or silly');
// }

// const answer = prompt('How are u? ');

// switch (answer) {
//     case 'Good':
//     case 'Cool':
//     case 'Nice':
//         console.log('Good sh*t');
//         break;

//     case 'Bad':
//     case 'Worst':
//     case 'Worse':
//         console.log('That is bad');
//         break;

//     case 'how are u':
//         console.log('Are u ARERIHANEC CHTOLE ?)');
//         break;

//     // else
//     default:
//         console.log('Incorrect data');
//         break;
// }

//! до тех пор пока (то , что тутой является правдой) { выполняется это }
// let isRunnig = true;
// let i = 0;

// while (isRunnig) {
//     i++;
//     if (i == 7) {
//         break;
//     }
//     if (i == 5) {
//         isRunnig = false;
//     }
//     console.log(i);
// }
// do {
//     // adfassdffsdfds
// } while (i < 5);

// for (let i = 0; i < 13; i++) {
//     console.log(i);
// }
// ? ---------------
// const obj = {
//     name: 'John',
//     surname: 'Doe',
//     age: 23
// };

// for (let prop in obj) {
//     console.log(obj[prop]);
// }
// const students = ['John', 'Mike', 'Bob'];

// for (let student of students) {
//     console.log(student);
// }
// ?-------------
// const age = prompt('Enter ur age - ');

// +age === 23 ? console.log('Good') : console.log('Bad');

// FuzzBizz
// Напишите цикл у которого условием будет : имеется переменная итератор ,
// до тех пор пока итератор будте меньше , чем 100 , выполнять операцию инкрементации (i++)
// когда цикл будет получать четное число мы будем выводить Fuzz , когда НЕчетное Bizz

//
// const num = '13.95';
// const num2 = '92.04';
// const result = parseFloat(num) + parseFloat(num2);

// const num = 13.95;
// const num2 = 13.95;

// console.log(num == num2);

// Arrays
// Object

// const number = 'HeLLo woRld woRld woRld  woRld';

// const si = 'Fi';

// if (number[0] != 0 && number[1] != 6) {
//     console.log('Bad');
// }

// Methods
// const index = number.indexOf('+');
// const firstNum = number.slice(0, index);

// && - и , || - или
// 12321
// const userChoose = prompt('Enter sum');

// const eur = 35;
// const doll = 27.6;

// const val = prompt('1) Eur 2) Doll');

// if (+val === 1) {
//     const result = eur * parseInt(userChoose);
//     console.log(result);
// }

// userNum % 2 == 0 ? alert('Chet') : alert('Ne chet');

// const userNum = prompt('Enter num : ');

// const students = ['Valik', 'Anton', 'Oleg', 'Nikitos'];

// const slicedOleg = students[2].slice(0, 3);
// console.log(students.length + 1);
// students.push([slicedOleg]);

// console.log(students[0][0]);
// console.log(students[3][2]);

// function printUserToConsole() {
//     //! Instructrion
//     console.log('Hello world');
// }
// function sh() {
//     console.log('Hello');
// }
// function sg() {
//     console.log('Goodbye');
// }
// let message = sh;
// message = sg;
// message();

// const sayHello = function () {
// console.log('Hello from middle of no were');
// };

// Greeting(10);
// Greeting(undefined, 10);
// console.log(greetingSum);
// const h1 = document.querySelector('h1');
// h1.append(greetingSum);

// const ky = fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json =>
//         json.forEach(el => {
//             const element = document.createElement('div');
//             element.className = 'something';

//             console.log(el.title);
//         })
//     );
// const nums = prompt('Enter ur value');

// alert(nums[2] + nums[1] + nums[0]);
// const name = 2;

// sayHello();
// function Greeting(x, y) {
//     if (x === undefined) return console.log(y);
//     if (y === undefined) return console.log(x);

//     const sumResult = x + y;
//     return sumResult;
// }

// arguments
// function sum() {
//     let result = 0;

//     for (let argument of arguments) {
//         debugger;
//         result = result + argument;
//         console.log('[result]', result);
//     }

//     return result;
// }

// sum(10, 2, 23, 70, 5678, 142);

// function printLiverpoolResultOfSeason(time, ...goals) {
//     console.log('[time]', time);

//     for (let goal of goals) {
//         console.log('[goal]', goal);
//     }
// }
// printLiverpoolResultOfSeason('first time ', 1, -2, 3, -1);

// const [online, off] = [
//     ['Sergey', 'Alex', 'Yan', 'Vitaliy'],
//     ['John Doe', 'Bob Dylan', 'Mike Tyson']
// ];

// console.log('[online]', online);
// console.log('[off]', off);

// let { money, name } = { name: 'John', surname: 'Doe', money: 23 };

// console.log('[money]', money);
// console.log('[money]', name);

// function substract(x, y) {
//     return x - y;
// }
// function sum(x, y) {
//     return x + y;
// }
// function operation(x, y, func) {
//     const result = func(x, y);
//     return result;
// }

// console.log('[sum]', operation(10, 3, sum));
// console.log('[substract]', operation(26, 3, substract));

// function main(number) {
//     if (number == 1) {
//         return function (x, y) {
//             return x + y;
//         };
//     }
//     if (number == 2) {
//         return function (x, y) {
//             return x - y;
//         };
//     }
//     if (number == 3) {
//         return function (x, y) {
//             return x * y;
//         };
//     }
//     if (number == 4) {
//         return function (x, y) {
//             return x / y;
//         };
//     }
// }

// const num = prompt('Enter num : ');
// const fn = prompt('fn : ');
// const sn = prompt('sn : ');
// const action = main(+num);
// const result = action(+fn, +sn);
// console.log(result);

// ! Scoped

// *Global
// var name = 'John';
// let surname = 'Doe';
// const age = 23;

// function printSomethingToConsole() {
//     var result = `Hello my name is ${name} ${surname} i an ${age}`;

//     // return result;
// }

// let result;

// if (age == 23) {
//     console.log('Hello');

//     var result = 23 + 43;
//     console.log(result);
// }

// console.log(result);

// printSomethingToConsole();
// console.log(result);
// ? ...

// closures

// function out() {
//     //внешняя функция
//     let name = 'John '; // переменная в области видимости аут
//     function inner() {
//         // Вложенная функция
//         let surname = 'Doe';
//         return console.log(name + surname);
//     }

//     return inner;
// }

// function nums() {
//     let num = 5;

//     function result() {
//         num++;
//         console.log(num);
//     }

//     return result;
// }

// const allFromName = out();
// allFromName();
// const result = nums();
// result();
// result();
// result();
// result();
// result();
// result();
// result();
// result();

// Pattern Module
// function something() {
//     return {};
// }
// console.log(something());
// Recourse

// function fucktorial(x, y, z = 13) {
//     const sum = x.toString() + y.toString() + z.toString();

//     console.log(sum);
// }
// fucktorial(2, 23, 23);
// &&

// Logic
// const age = prompt('How olad are u ?');

// if (age == 18) {
//     console.log('Ok');
// } else if (age > 12 && age < 18) {
//     console.log('Padletok');
// } else if (age > 18 && age < 70) {
//     console.log('Alult');
// } else if (age < 12) {
//     console.log('Kid');
// } else if (age > 70) {
//     console.log('Good evening');
// } else {
//     console.log('WTH?');
// }

// alert() - добро пожаловать , prompt() - привет , как ты ? ,
// добрый вечер - как офицально , hello - а вы щито америханес ? , если строка пустая - .

// У нас при попадании пользователя на страницу появляется контекстное меню , в которм пользователю предложенно на выбор
// 1) Начать общение
// 2) Узнать о нас
// 3) Выход
// Если пользователь вводит 1) - Мы начинаем общение , то есть : Приветствуеем и узнаем , как дела у нашего юзера
// в зависимости какие дела у пользователя мы предлагаем ему воспользоваться плеером и закидываем название песни в алерт согласно
// пользовательскому настроению , настроение может быть 3х градаций все гуд - веселая песенка ,
// все норм - обыная повседневаная музыка
// , если все плохо - лирическая песня / мелодия
// 2) Вывести сообщение в котором пользователю предоставляется возможность перейти в пункты
// 1) Возраст 2) Имя и фамилия
// 3) Выход - просто закрывается диалоговое окошко

// === | ==

// toLowerCase()
// VoT taKiM OBraZom
// vot takim obrazom

//!While  -закончит свое выполнение когда условие (оно описано тут) станет false или исользование оператора break ;
//! Используем когда точно не знаем сколько операций нам предстоит выполнит

// ? For - используем при переборе (!) / когда знаем точное колисчество итераций
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// ! - не

// alert('Hello user');
// let isRunning = true;

// while (isRunning) {
//     const userChoose = prompt(
//         ' 1) Начать общение \n 2) Узнать о нас \n 3) Выход'
//     );
//     switch (userChoose) {
//         case '1':
//             const userMood = prompt('How are u? ');
//             // Upper - VOT TAK
//             // Lower - vot tak
//             if (userMood.toLowerCase() == 'Ok'.toLowerCase()) {
//                 alert('Something good');
//             }
//             if (userMood.toLowerCase() == 'Norm'.toLowerCase()) {
//                 alert('Something that okay');
//             }
//             if (userMood.toLowerCase() == 'sad'.toLowerCase()) {
//                 alert('Something sad');
//             }
//             break;
//         case '2':
//             const aboutMe = prompt(' 1) Возраст \n 2) Имя и фамилия ');
//             aboutMe == 1 ? alert('23') : alert('Katasonov Kirill');
//             break;
//         case '3':
//             isRunning = !confirm('Do u wanna leave ?');
//             alert('Bye');

//             break;

//         default:
//             alert('WTH?');
//             break;
//     }
// }

// Вам нужно обработать иные варианты и если варианта нет в списке предложить пользователю еще раз выбрать правильное значение
// Выход только в 3
// while , switch , if/else ,

// switch ('question') {
// case 'answer':
// const quest = prompt('lalala');
// const ans = 'true';

// if (quest == ans) console.log('Yep');
// if ('anwser' !== 'false') console.log('Nope');

// 'anwser' == 'true' ? console.log('Yep') : console.log('Nope');
// break;

//     default:
//         break;
// }

// ? Функции
// Калькулятор
// Мы приветствуем пользователя и соответственно предлагаем ему операции :
//  " 1) + 2) - 3) / 4) * 5) Exit"
// Мы просим пользователя ввести первое число и сохраняе
// м его в переменную и также просим второе число
// Калькулятор раотает с двумя числами , не более
// применить : while , function (return) , prompt , confirm (?) , + | - | / | *

// let isRunning = true;
// while (isRunning) {
//     const userChoose = prompt(
//         ' Enter : \n 1) + \n 2) - \n 3) / \n 4) * \n 5) q or Q '
//     );
//     if (userChoose == 'q' || userChoose == 'Q') break;

//     const firstNumber = +prompt('Enter ur first num : ');
//     const secondNumber = +prompt('Enter ur second num : ');

//     switch (userChoose) {
//         case '+':
//             add(firstNumber, secondNumber);
//             break;
//         case '-':
//             sub(firstNumber, secondNumber);
//             break;
//         case '*':
//             mult(firstNumber, secondNumber);
//             break;
//         case '/':
//             pod(firstNumber, secondNumber);
//             break;
//         default:
//             break;
//     }
// }

// function add(x, y) {
//     debugger;
//     alert(`${x + y} : your result`);
// }
// function sub(x, y) {
//     return alert(`${x - y} : your result`);
// }
// function mult(x, y) {
//     return alert(`${x * y} : your result`);
// }
// function pod(x, y) {
//     return alert(`${x / y} : your result`);
// }
// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(13, 10);
// add(11, 12);

// function sayHello(greeting) {
//     console.log(greeting);
// }
// sayHello('Good evening');
// !
// function sayHello(name, greeting = 'Hello') {
//     // if (name == 'John') greeting = 'How are you ';
//     console.log(`${greeting} ${name}`);
// }
// sayHello('John ?', 'How are u');
// sayHello('Steve');
// sayHello('Mike');
// sayHello('Bob', 'Hey you');

// alert() , prompt() , function <name>(arg1 , arg2) { alert("") }
// Написать функцию которая будет принимать имя и фамилию пользователя и приветствовать его на сайте

// !Function expresion
// const myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
//     statements
//  };
// !Function Declaration
// function sayHello(name, greeting = 'Hello') {
//     // if (name == 'John') greeting = 'How are you ';
//     console.log(`${greeting} ${name}`);
// }
// !Arrow function
// let printUserToConsole = (userName = 'Kirill') =>
//     console.log(`Hello ${userName}`);
// printUserToConsole('John');
// printUserToConsole('Bob');
// printUserToConsole('Mike');
// printUserToConsole();

// ! String methods
// const firstName = 'John';

// ! Static
// console.log(firstName.length);
// ! Dynamic
// console.log(firstName.repeat(3));

// const key = 'world';

// const firstPosition = greeting.indexOf(key);
// const lastPosition = greeting.lastIndexOf(key);

// const greeting = 'Hello world , good gay';
// console.log(greeting[2]);

// const isWorldExist = greeting.includes('orld');
// const slicedStr = greeting.substring(6, 11);
// const slicedString = greeting.substr(6, 5);

// const slicedString = greeting.slice(0, -11);
// console.log('[slicedString]', slicedString);

// dfghjklhggbm
// UHJMKLJNKHVVHGJNK

// console.log('[greeting]', greeting.toLowerCase());
// console.log('[greeting]', greeting.toUpperCase());

//  Задача : 'Hello world , good gay'
// 1) Узнать есть ли в данной строке слово "good";
// 2) Обрезать строку таким образом , чтобы у нас получилось "good gay';
// * 3) Если в строке есть "Hello" -> вывести в консоль "Есть";
// * 4) Узнать индексы "day" , "," ;
// const string = 'Hello world , good gay';

// Trim;
// let userName = '       Hello                                 ';
// console.log(userName);
// let trimedGreeting = userName.trim();
// console.log(trimedGreeting);

// Concat
// const greeting = 'Hello ';
// const hotWord = 'world';
// const helloWorld = greeting.concat(hotWord);

// console.log('[helloWorld]', helloWorld);

// Replace => заменяет чт-то в "подстроке"
// let greeting = 'Good morning';
// greeting = greeting.replace('Good', 'Bad');
// console.log('[greeting]', greeting);

let greeting = 'Good morning ,Good day';
// greeting = greeting.replaceAll('Good', 'Bad');
// console.log('[greeting]', greeting);

// * Задачи
//  '   Hello world , good gay   , good good ' у нас есть строка с которой необходимо произвести следующие манипуляйит
// ! 1) Убрать лишнее пробелы
// 2) Заменть все "good" на 'bad'
// 3) Вырезать "good good"
// 4) Привести в верх р
// 5) Привести в ниж р

// Д/з
// Задача :
// "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa excepturi
// dolor veniam veritatis cupiditate quisquam odit modi debitis autem,
// consectetur temporibus maxime, quod magnam ab.    "
// ! trim
// 1) Убрать лишние пробелы
// !includes
// 2) Узнать встречается ли нам в тексте слово "adipisicing"
// 3) Узнать встречается ли нам в тексте слово "nope"
// !includes
// * includes is return for us boolean (TRUE||FALSE)
// 4) Если в тексте слово "nope" не было обнаружено - отреагировать (Например в консоль вывести "Слова "nope в тексте найдено не было" ")
// ? substring || slice
// 5) Вырезать из текста подстроку "Lorem ipsum dolor sit" и вывести ее в консоль
// * replaceAll()
// 6) Заменить ВСЕ "consectetur" в тексте на "NoPe"
// * indexOf()
// 7) Вывести в консоль индекс начала подстроки "maxime"
// const app = document.querySelector('.something');
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json =>
//         json.forEach(element => {
//             app.innerHTML += `<div class="blue"><h3 >${element.title}</h3> <button>Send</button></div>`;
//         })
//     );

// !ARRAYS
//                     0        1       2
// const myStudents = ['Kolya', 'John', 'Mike'];
// const titleOfCars = ['MB', 'BMW', 'VAZ'];
// const nums = [13, 23, 92];
// const multi = ['John', 13, 'Mike', 23];
// console.log(myStudents[2]);

// let bmw = titleOfCars[1];
// bmw = 'Shkoda';
// titleOfCars[1] = 'Dewoo';

// titleOfCars[33] = 'Dewoo';
// console.log(titleOfCars[30]);
// console.log('[bmw]', bmw);
// console.log('[titleOfCars]', titleOfCars);

// for (let index = 0; index < titleOfCars.length + 2; index++) {
//     const partOfCars = titleOfCars[index];

//     console.log('[partOfCars]', partOfCars);
// }

// * length
// console.log('[myStudents]', myStudents.length);

// const john = myStudents[1];

// console.log('[Kolya]', myStudents[0]);
// console.log('[john]', john);
// console.log(multi);
// !MultArr
// const table = [
//     ['Dmitry', ['Kirill', 23, ['Hello ', 'World', [23]]], true],
//     ['John', 13, ['Lorem hello world , goodbye !'], false],
//     ['Mike', 32, [32, '123', ['Goodbye']], false]
// ];

// console.log(
//     `${table[0][1][2][0]} ${table[0][1][2][1]} ${table[0][1][2][2][0]}`
// );
// * GOOD
// const startSlicedValue = table[1][2][0].indexOf('hello');
// const finishSlicedValue = table[1][2][0].lastIndexOf('goodbye');
// const valueToAppend = table[1][2][0]
//     .slice(startSlicedValue, finishSlicedValue)
//     .replace(',', '');

// console.log(valueToAppend);
// !BAD
// console.log(
//     table[1][2][0]
//         .slice(
//             table[1][2][0].indexOf('hello'),
//             table[1][2][0].lastIndexOf('goodbye')
//         )
//         .replace(',', '')
// );

// console.log(table[2][0] + ' ' + table[2][2][2][0].toLowerCase());
// console.log(table[1][2][0].includes('!'));

// 1. Вывести в консоль "Hello" , "World" и 23
// 2. Вывести в консоль вырезав из строки 'Lorem hello world , goodbye !' - "hello world"
// 3. Вывести в консоль Майка и goodbye
// 4. Определить входит ли в строку 'Lorem hello world , goodbye !' подстрока "!"
// 5. Определить НЕ входит ли в строку 'Lorem hello world , goodbye !' подстрока "goodby"
// const lables = ['Samsung', 'Huaway', 'Nokia', 'RedME'];

// ! + to end of array
// lables.push('Sony');
// lables.push('BlackBerry');
// lables.push('John');

// ! + to start of array
// lables.unshift('Mike');

// ! shift first elem
// lables.shift();

// ! shift end elem
// lables.pop();

// lables[12] = 'Ne Samsung';

// const newArrayForDom = lables.splice(2, 1);

// const newCollection = ['Phone', 'NewPhone', 'NewNewPhone'];

// const allPhones = lables.concat(newCollection);

// const strFromArr = allPhones.join(' - ');

// console.log(strFromArr);

//
// const arr = [
//     'John',
//     23,
//     [''],
//     [['Phone', 'Money', 'Car', ['Hello world']]],
//     ['Lorem ipsum 23 , 25 , !']
// ];
// const cars = [
//     ['Tesla', 'Audi', 'MB', 'BMW', 'Opel'],
//     ['Suzuki', 'Vaz', 'ZaZ']
// ];
// const price = [2323, 3223, 3113, 13231, 2321];
// const numbers = [];

// const parsedNum = '12 pl,df;sld asdf 12';
// console.log(parseInt(parsedNum));

// 1) Получить из массива arr и вывести в консоль : "Phone" , "Hello world" , "Lorem ipsum"
// 2) Вырезать все числа , которые находятся в массиве arr и сложить их , затем создать массив
// nums и с него все числа которые мы нашли в arr
// 3) Вывести на экран - Тесла стоит 2323 , Ауди стоит 3223 , Опель 3113
// 4) Сконкатенировать массив price && nums

// !Array methods
// * join

// const students = ['hello', 'how are you ?', 'I"m fine thx', 'goodbye'];

// join() -> мы получили данные с сервака , в виде массива , соответственно нашей задачей явлется - отправить эти данные на страницу
// const studetsToString = students.join('\n');

// console.log('[studetsToString]', studetsToString);

// * sort
// * reverse
// function arrSort(a, b) {
//     return a - b;
// }

// const arrSort = function (a, b) {
//     return a - b;
// };

// const prices = [1, 2323, 13, 145, 23, 152];

// const arrSort = (firstNumber, secondNumber) => {
//     return firstNumber - secondNumber;
// };

// function sortFn(fN, sN) {
//     if (fN == sN) return 0;
//     if (fN < sN) return -1;
//     if (fN > sN) return 1;
// }
// function sortingArr(arr) {
//     console.log(arr);
//     const newSortingArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log('[I]', arr[i]);
//         for (let j = 0; j < arr.length; j++) {
//             console.log('[J]', arr[j]);
//             if (j == i) continue;
//             // if (j > i)
//         }
//     }
//     return newSortingArray;
// }
// sortingArr(prices);
// prices.sort(arrSort);
// console.log(prices.reverse());

// const words = ['b', 'a', 'c'];

// words.sort();

// console.log(words.reverse());
// console.log('A' > 'a');
// const people = ['John', 'Mike', 'Bob', 'Joahn'];
// const prices = [2000, 2333, 123, 923, 239, -23];

// const johnStartPos = people.indexOf('John');
// const johnEndPos = people.lastIndexOf('John');
// console.log('[johnStartPos]', johnStartPos);
// console.log('[johnEndPos]', johnEndPos);

// const includesJohn = people.includes('John');
// console.log('[includesJohn]', includesJohn);

// const everyBody = people.every(john => john !== 'John');
// const someBody = people.some(john => john !== 'John');

// const everyBody = prices.every(price => price > 0);
// const someBody = prices.some(price => price > 0);

// console.log(everyBody);
// console.log(someBody);

// ! forEach || map
// let students = [
//     'Yury',
//     "Konstantin : povelitel' t'mi",
//     'Dima',
//     'Kirill',
//     'Kirill',
//     'Stas',
//     'Alex'
// ];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

//     if (student == 'Yury') console.log('Hello Yury , how are u ?');
//     if (student == 'Stas') console.log('Hello Stas');
//     // console.log(student);
// }

// !forEach()
// students.forEach((student, index) => {
//     console.log('[index]', index);
//     console.log('[student]', student);
// });

// !map()
// let newArray = students.map(student => {
//     if (student == 'Kirill') {
//         student = "Teper' NeT";
//     }
//     return student;
// });
// console.log('[newArray]', newArray);

// console.log('[students]', students);
// let studentsPoints = [10, 12, 14, 15, 1, 2];

// const todayStudentsPoints = studentsPoints.map(point => {
//     return point + 2;
// });
// console.log(newStudentsPoints);

// 1)
// const arr = [1, 23, 32, 2332, 134];
// Сортировать массив по увиличению и по уменьшению

// 2)
// const arr1 = ['Kostya', 'Dima', 'Stas', 'Sanya', 'Kirill'];
// Перебрать массив добавив к каждому имени Фамилию *

// 3)
// const arr3 = [
//     ['Hello', 'World'],
//     ['World', 'Hello']
// ];
// объеденить массивы внутррии в один массив

// 4)
// const arr1 = ['Kostya', 'Dima', 'Stas', 'Sanya', 'Kirill'];
// Если встретился Кирилл - вывести на экран "Hello world"

// 5)
// const arr1 = ['Kostya', 'Dima', 'Stas', 'Sanya', 'Kirill'];
// Найти индекс Саши

// 6)
// const arr1 = ['Kostya', 'Dima', 'Stas', 'Sanya', 'Kirill'];
// 6.1)Добавить в конец массива Виталика и Родиона , а в начало Анатолия и Валентина
// 6.2)Удалить первый элемент массива и последний также
// 6.3)Найти индекс Стаса с конца
// 6.3)Поменять Стас на Станислав
function sl(s, l, w) {
    return s + l + w;
}

// console.log(sl('23', '2', '3'));

// const array = ['Hello ', 'world ', [1, 23, 13], [['Hello world']]];

// const sayHelloWorld = array[3][0][0];

// console.log('[sayHelloWorld]', sayHelloWorld);

// function counter() {
//     let countCounter = 0;

//     return function () {
//         return countCounter++;
//     };
// }

// const currentCounterValue = counter();

// console.log(currentCounterValue());
// console.log(currentCounterValue());
// console.log(currentCounterValue());
