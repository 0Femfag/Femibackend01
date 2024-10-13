// const myObj = {
//   name: "Femi",
//   age: 77,
//   myCars: {
//     car1: "BMW",
//     car2: "Porsche",
//     car3: "Mercedez Benz",
//   },
// };

// console.log(myObj.myCars.car2);
// console.log(myObj.myCars.car3);

// let total = 0,
//   count = 1;
// while (count <= 10) {
//   // total += count;
//   total = total + count;
//   // count += 1;
//   count = count + 1;
// }
// console.log(count);
// console.log(total);

// console.log("This is the first line\nAnd this is the second");
// console.log(`half of 100 is ${100 / 2}`);
// let number = 10;
// let zero = 0;
// let x = number + zero;
// console.log(x);
// let myNumber = 10;
// myNumber += 2;
// console.log(myNumber);

// myNumber = myNumber + 2;

let text = "Hello world";
console.log(text.charAt(4));

let text2 = "Hello world";
console.log(text2.charCodeAt(0));

const name = "23Schools";
console.log(name.at(2));

let text3 = "HELLO WORLD";
console.log(text[12]);

let fruit = "Apple, Banana, KiWi";
console.log(fruit.slice(-9, -6));

let fruit1 = "Apple, Banana, KiWi";
console.log(fruit1.substring(7));

let fruit3 = "Apple, Banana, KiWi";
console.log(fruit3.substr(-4));

let firstWord = "Hello World";
console.log(firstWord.toUpperCase());

let secondWord = "Hello World";
console.log(secondWord.toLowerCase());

let Word1 = "Femi";
let Word2 = "Mane";
let Word3 = Word1.concat(" ", Word2);
console.log(Word3);

let lastWord = "        Femi Mane!    ";
console.log(lastWord.trim());

let lastWord2 = "        Femi Mane!    ";
console.log(lastWord2.trimStart());

let number = 5;
let string = number.toString();
let padded = string.padStart(4, "x");
console.log(padded);

let string2 = "5";
console.log(string2.padEnd(4, "x"));

let user = "Femi";
console.log(user.repeat(3));

let statement = "Please be fast";
console.log(statement.replace(/FAST/i, "Kind"));

let animal = "dog, cat, mouse";
console.log(animal.split(" "));

let person1 = ["Femi", "Mane", "Amos", "Femi", "Femi"];
console.log(person1.lastIndexOf("Femi", 15));

// let happenings = ["The rain in SPAIN stays mainly in the plain"];
// let outcome = happenings.ma;
// console.log(outcome);

let x = (0.2 * 10 + 0.1 * 10) / 10;
let total = x;
console.log(total);

let y = 10;
let j = 20;
let z = "30";
let outcome = y + j + z;
console.log(outcome);

let k = "100";
let h = "10";
let f = k * h;
console.log(f);

let v = 100 / "10";
console.log(v);

let q = NaN;
let l = 5;
let b = q + l;
console.log(b);

let t = typeof NaN;
console.log(t);

let c = BigInt(305405);
console.log(c);

let p = 305405n;
console.log(p);

let i = Number.MAX_SAFE_INTEGER;
let o = Number.MIN_SAFE_INTEGER;
let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;

let e = Number.isSafeInteger("eddh");
console.log(e);

let a = Number.isInteger("jdf");
console.log(a);

let r = 9.55765;
console.log(r.toFixed(10));

let w = 123;
console.log(w.toString());

let pre = 9.898;
console.log(pre.toPrecision(15));

let doe = 305;
console.log(doe.valueOf());

// You access an array element by referring to the index number:
// pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
console.log(fruits.pop());

// push() method adds a new element to an array (at the end) and returns the new array length:
const cars = ["Ferrari", "BMw", "Dodge Durango"];
console.log(cars.push("Toyota"));

// shift() method removes the first array element and "shifts" all other elements to a lower index
// returns value that was shifted out:
const houseItem = ["Fan", "Chair", "Table", " Television"];
console.log(houseItem.shift());

// unshift() method adds a new element to an array(at the beginning) and "unshifts" older elements:
// returns the new array length:
const Appliances = ["Frame", "Bed", "Foam"];
console.log(Appliances.unshift("Air conditioner"));

const person = {
  name: "Femi",
  age: 77,
  city: "Hong Kong",
};
console.log(JSON.stringify(person));

const myGirls = ["Cecilie", "Annabelle"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myMen = ["Femi", "Zidane"];
const myChildren = myGirls.concat(myBoys, myMen);
console.log(myChildren);

// The copyWithin() method copies array elements to another position in an array:
// Copy to index 2, all elements from index 0 to 2:
const week = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
console.log(week.copyWithin(2, 0, 2));

// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

// The splice() method can be used to add new items to an array:
// the first params (3) defines the position where new elements should be added while the second defines how many elements should be removed.
const socialMedia = ["Google", "Facebook", "Instagram", "Twitter"];
console.log(socialMedia.splice(3, 1, "Reddit"));

const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1));

// The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array and does not remove any elements from the source array.
const moments = ["Sensational", "Worldclass", "Ephemeral", "Kingston"];
console.log(moments.slice(1, 3));

const life = ["Water", "Tissue", "Water", "Glass", " Cotton", "Water"];
console.log(life.lastIndexOf("Water")) + 1;

// This example finds the index of the first element that's larger than 18:
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

// the find() method returns the value of the first array element that passes a test function.
// this example finds and returns the value of the first element that's larger than 18:
const Numbers = [4, 9, 16, 25, 29];
let second = Numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(second);

// findLast() start from the end of an array and return the value of the first element that satisfies a condition:
const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast((x) => x > 40));

// findLastIndex() method finds the index of the last element that satisfies a condition.
const temp2 = [27, 28, 30, 40, 42, 35, 30];
console.log(temp2.findLastIndex((x) => x > 40));

const temp4 = [27, 28, 30, 35, 40, 42];
console.log(temp4.reverse());

// Numeric sort: At default, the sort() function only sorts values as strings, because of this, the sort() method will produce incorrect result when sorting numbers.
// Hence one can fix this by providing a compare function:
const temp3 = [27, 28, 30, 35, 40, 42];
console.log(
  temp3.sort(function (a, b) {
    return b - a;
  }),
);

const car = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(
  car.sort(function (a, b) {
    return a.year - b.year;
  }),
);

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitss.sort());
// console.log(fruitss.reverse());

const beverages = ["Banana", "Orange", "Apple", "Mango"];
console.log(beverages.toSorted());

function myArraymin() {
  return Math.min.apply(null, arr);
}

function myArraymax() {
  return Math.max.apply(null, arr);
}

const fruity = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruity.constructor);

const fruitty = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruitty.copyWithin(2, 0, 2));

// const numberly = [45, 4, 9, 16, 25];
// let txt = "";
// numberly.forEach(myFunction);
// function myFunction(value, index, arry) {
//   txt += value + "<br>";
// }
// console.log(txt)

// map() method creates a new array by performing a function on each array element.
const figures1 = [45, 4, 9, 16, 25];
const figures2 = figures1.map(myFunction);
function myFunction(element) {
  return element * 2;
}
console.log(figures2);

// flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr2 = [1, 2, 3, 4, 5, 6];
console.log(myArr2.flatMap((x) => x * 2));

// filter() method creates a new array with array elements that pass a test and this exmaple creates a new array from elements with a value larger than 18
const digits = [45, 4, 9, 16, 25];
const over18 = digits.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

const callDigit = [45, 4, 9, 16, 25];
let sum = callDigit.reduceRight(myFunction);
function myFunction(total, value) {
  return total + value;
}
console.log(sum);

// some() method checks if some array values pass a test
// const numberfy = [45, 4, 9, 16, 25];
// let allOver18 = numberfy.some(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);

// every() method checks if all array values pass a test.
// const numberby = [45, 4, 9, 16, 25];
// let allover18 = numberby.every(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allover18);

// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
const item = ["Tissue", "Cotton Wool", "Rub", "Drugs"];
console.log(item.with(2, "Inhaler"));

// JS Array Spread(...)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

// new Date() creates a date object with a specified date and time.
const date = new Date();

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const d = new Date(2018, 11, 24, 10, 33, 30, 0);

let msec = Date.parse("October 02, 2024");
const de = new Date(msec);
console.log(de);

let msec2 = Date.parse("October 02, 2024");
console.log(msec2);

const years = new Date("2024-10-02");
console.log(years.getFullYear());

const month = new Date("2024-10-02");
// let monthy = month[d.getMonth()];
console.log(month.getMonth());
// console.log(monthy);

const date1 = new Date("2024-10-02");
console.log(date1.getDate());

const hours = new Date("2024-10-02");
console.log(hours.getHours());

const minute = new Date("2024-10-02");
console.log(minute.getMinutes());

// const seconds = new Date("2024-10-02");
// console.log(seconds.getSeconds());

// const milliSecond = new Date("2024-10-02");
// console.log(milliSecond.getMilliseconds());

// const day = new Date("2024-10-02");
// console.log(day.getDay());

// const time = new Date("2024-10-02");
// console.log(time.getTime());

// const diff = new Date("2024-10-02");
// console.log(diff.getTimezoneOffset());

const Year = new Date();
console.log(Year.setFullYear(2024));

// const Month = new Date();
// console.log(Month.setMonth(10));

// const datey = new Date();
// console.log(datey.setDate(22));

// let tt = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);
// if (someday > today) {
//   return (text = "Today is before January 14, 2100");
// } else {
//   return (text = "Today is after January 14, 2100");
// }
// console.log(someday);

console.log(Math.round(4.6));
console.log(Math.ceil(-4.2));
console.log(Math.floor(4.2));
console.log(Math.trunc(4.9));
console.log(Math.sign(-4));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(169));

let win = -0;
console.log(Boolean(win));

let lean = "";
console.log(Boolean(lean));

// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it's not nullish(null or undefined)
// Otherwise it returns the second argument.
let ben = "Femi";
let tint = "missing";
let answer = ben ?? tint;
console.log(answer);

// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
// variablename = condition ? value1 : value2;
let age = 1;
let voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable);

let hour = 23;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a case match, the associated block of code is executed.
// If there is no case match, the default code block is executed.
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    text = "Looking forward to the weekend";
}
console.log(day);

// The default keyword specifies the code to run if there is no case match:
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
}
console.log(text);

// Sometimes you will want different switch cases to use the same code.
// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

switch (new Date().getDay()) {
  case 4:
  case 5:
    outcome = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    outcome = "It is Weekend";
    break;
  default:
    outcome = "Looking forward to the Weekend";
}
console.log(outcome);

// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

let totti = "0";
switch (totti) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);

// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// The For Loop => The for statement creates a loop with 3 optional expressions:
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.
// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const motors = ["Lamborghini", "Ferrari", "Aston Martin", "Alfa romeo"];
for (let i = 0; i < 3; i++) {
  const currentItem = motors[i];
  console.log(currentItem);
}

// The JavaScript for of statement loops through the values of an iterable object.
const vehicles = ["BMW", "Volvo", "Mini"];
let saying = "";
for (let x of vehicles) {
  saying = saying + x;
}
console.log(saying);

let language = "JavaScript";
let yin = "";
for (let x of language) {
  yin += x;
}
console.log(yin);

const man = { fname: "John", lname: "Doe", age: 25 };
let lines = "";
for (let x in man) {
  lines += man[x];
}
console.log(lines);

const integer = [45, 4, 9, 16, 25];
let txt = "";
for (let x in integer) {
  txt += integer[x];
}
console.log(txt);

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// You can create a JavaScript Set by:
// Passing an array to new Set()
// Create an empty set and use add() to add values

const letters = new Set(["a", "b", "c"]);
console.log(letters);
const figures = new Set();
figures.add(1);
figures.add(2);
figures.add(3);
console.log(figures);

const consonant = new Set(["a", "b", "c"]);
let tyt = "";
for (const x of consonant) {
  tyt += x;
}
console.log(tyt);

const alphabet = new Set(["a", "b", "c"]);
answer = alphabet.has("d");
console.log(answer);

const letter = new Set(["a", "b", "c"]);
const myIterator = letter.values();
let hyphen = "";
for (const entry of myIterator) {
  hyphen += entry;
}
console.log(hyphen);

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// You can create a JavaScript Map by:
// Passing an Array to new Map()
// Create a Map and use Map.set()

const pines = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(pines);
console.log(typeof pines);
let numb = pines.get("apples");
console.log(numb);

const itinery = new Map();
itinery.set(true, 100);
itinery.set("Mancity", 8);
itinery.set("Champions", 4);
itinery.delete(true);
console.log(itinery.size);
console.log(itinery);
console.log(typeof itinery);
console.log(itinery.has(true));
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };
const miscellaneous = new Map();
miscellaneous.set(apples, 500);
miscellaneous.set(bananas, 350);
miscellaneous.set(oranges, 150);
console.log(miscellaneous);

// const healthyFruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];
// function callback({ quantity }) {
//   return quantity > 200 ? "OK" : "LOW";
// }
// const result = Map.groupBy(healthyFruits, callback);
// console.log(result);
