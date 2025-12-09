//exercise 1
console.log("exercise 1")

function max(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}

console.log(max(7, 7));
console.log(max(12, 8));

//exercise 2
console.log("exercise 2") 

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 9));

//exercise 3
console.log("exercise 3")

function printName() {
    console.log("Nino Shermadini");
}

printName();

//exercise 4
console.log("exercise 4")

function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}

const fullName = getFullName("Nino", "Shermadini");
console.log(fullName);

//exercise 5
console.log("exercise 5")

function multiply(n) {
    let product = 1;

    for (let i = 1; i <= n; i++) {
        product *= i;
    }

    return product;
}

console.log(multiply(4));


//Student ობიექტის შექმნა

const student = {
    firstName: "Nino",
    lastName: "Shermadini",
    age: 22,
    scores: [8, 9, 11, 3, 10],

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};



//exercise 6
console.log("exercise 6")

console.log(student.fullName());

//exercise 7
console.log("exercise 7")

function sumScores(scores) {
    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total;
}

console.log(sumScores(student.scores));

//exercise 8
console.log("exercise 8")

console.log("Student's name is" + " " + student.firstName + " " + "Student's age is" + " " + student.age);




