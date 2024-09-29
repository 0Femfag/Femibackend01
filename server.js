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
let char = text.charAt(4);
console.log(char);

let text2 = "Hello world";
let char2 = text2.charCodeAt(0);
console.log(char2);

const name = "23Schools";
let letter = name.at(2);
console.log(letter);

let text3 = "HELLO WORLD";
let char3 = text[12];
console.log(char3);

let fruit = "Apple, Banana, KiWi";
let part = fruit.slice(-9, -6);
console.log(part);

let fruit1 = "Apple, Banana, KiWi";
let part2 = fruit1.substring(7);
console.log(part2);

let fruit3 = "Apple, Banana, KiWi";
let part3 = fruit3.substr(-4);
console.log(part3);

let firstWord = "Hello World";
let convert = firstWord.toUpperCase();
console.log(convert);

let secondWord = "Hello World";
let convert2 = secondWord.toLowerCase();
console.log(convert2);

let Word1 = "Femi";
let Word2 = "Mane";
let Word3 = Word1.concat(" ", Word2);
console.log(Word3);

let lastWord = "        Femi Mane!    ";
let trimIt = lastWord.trim();
console.log(trimIt);

let lastWord2 = "        Femi Mane!    ";
let trim2 = lastWord2.trimStart();
console.log(trim2);

let number = 5;
let string = number.toString();
let padded = string.padStart(4, "x");
console.log(padded);

let string2 = "5";
let padEnd = string2.padEnd(4, "x");
console.log(padEnd);

let user = "Femi";
let result = user.repeat(3);
console.log(result);

let statement = "Please be fast";
let newWord = statement.replace(/FAST/i, "Kind");
console.log(newWord);

let animal = "dog, cat, mouse";
let seperator = animal.split(" ");
console.log(seperator);

let person1 = ["Femi", "Mane", "Amos", "Femi", "Femi"];
let lastIndex = person1.lastIndexOf("Femi", 15);
console.log(lastIndex);

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

const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
console.log(fruits.pop());

// push() method adds a new element to an array (at the end):
const cars = ["Ferrari", "BMw", "Dodge Durango"];
console.log(cars.push("Toyota"));

// shift() method removes the first array element and "shifts" all other elements to a lower index
const houseItem = ["Fan", "Chair", "Table", " Television"];
console.log(houseItem.shift());

// unshift() method adds a new element to an array(at the beginning) and "unshifts" older elements:
const Appliances = ["Frame", "Bed", "Foam"];
console.log(Appliances.unshift("Air conditioner"));

const person = {
  name: "Femi",
  age: 77,
  city: "Hong Kong",
};

let myString = JSON.stringify(person);
console.log(myString);
