// const person = {
//   firstName: "Femi",
//   lastName: "Mane",
//   age: 77,
//   eyeColor: "Black",
// };

// delete person.age;
// console.log(person);

// const x = person;
// x.age = 27;
// x.eyeColor = "Red";
// console.log(x);

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

let total = 0,
  count = 1;
while (count <= 10) {
  // total += count;
  total = total + count;
  // count += 1;
  count = count + 1;
}
console.log(count);
console.log(total);

console.log("This is the first line\nAnd this is the second");
console.log(`half of 100 is ${100 / 2}`);
// let number = 10;
// let zero = 0;
// let x = number + zero;
// console.log(x);
// let myNumber = 10;
// myNumber += 2;
// console.log(myNumber);

// myNumber = myNumber + 2;

// const modNum = 13 % 2;
// if (modNum == 0) {
//   console.log("this is an even number");
// } else {
//   console.log("this is an odd number");
// }

// const cars = ["Lamborghini", "Ferrari", "Aston Martin", "Alfa romeo"];
// const myTotalcars = cars.length;
// console.log(myTotalcars);

// const carss = ["Lamborghini", "Ferrari", "Aston Martin", "Alfa romeo"];
// for (let i = 0; i < 3; i++) {
//   const currentItem = carss[i];
//   console.log(currentItem);
// }

let text = "Hello world";
let char = text.charAt(4);
console.log(char);

let text2 = "Hello world";
let char2 = text2.charCodeAt(0);
console.log(char2);

const name = "23Schools";
let letter = name.at(2);
console.log(letter);
