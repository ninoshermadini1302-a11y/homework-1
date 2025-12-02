//task 1
console.log('task 1');

for (let i = 2; i <= 8; i++) {
    console.log(i);
  }

//task 2
console.log('task 2');

  for (let n = 5; n <= 35; n += 4) {
    console.log(n);
}

//task 3
console.log('task 3');

let product = 1;

for (let i = 3; i <= 8; i++) {
    product *= i;
}

console.log("ნამრავლი:", product);


//task 4
console.log('task 4');
const person = {
  firstName: "Marika",
  lastName: "Kankia",
  age: 26
};
console.log("სრული სახელი:", person.firstName + " " + person.lastName);

//task 5
console.log('task 5');
for (let key in person) {
  console.log(person[key]);
}

//task 6
console.log('task 6');
const fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

//task 7/
console.log('task 7');
fruits.unshift("Grapes");  
fruits.push("Pineapples");

console.log(fruits);

//task 8
console.log('task 8');
for (let i = 0; i < fruits.length; i += 2) {
  console.log("ინდექსი:", i, "ელემენტი:", fruits[i]);
}