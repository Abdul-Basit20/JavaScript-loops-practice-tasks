// Tasks In Javascript loops

// for loop
// Countdown Timer from 20 to 1
for (let time = 20; time >= 1; time--) {
  console.log(time);
}

// Login Attempts
for (let login = 1; login <= 3; login++) {
  console.log("OPT Attempt: ", login);
}

// Saving money counter
let savings = 0;
for (let days = 1; days <= 7; days++) {
  savings += 100;
  console.log(`day ${days} RS ${savings}`);
}

// Console Even Numbers 1 to 50
for (let num = 1; num <= 50; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Console Odd Numbers 1 to 50 but don't use conditional statements
for (let count = 1; count <= 50; count += 2) {
  console.log(count);
}

// Multiplication Table 1 to 10
for (let num = 1; num <= 10; num++) {
  for (let child = 1; child <= 10; child++) {
    let sum = num * child;
    console.log(`${num}x${child}=${sum}`);
  }
}

// While loop
// ATM PIN Attempts
let att = 1;
while (att <= 3) {
  console.log(`Attempt has been used = ${att}`);
  att++;
}

// Number Guessing Game
let nu = 5;
let check = 0;
while (check !== nu) {
  check = Number(prompt("Guess the number from 1 to 10:"));
}
alert("Correct answer Congratulations!");

// do while Loop
// Print 1 to 10
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Choosing numbers
let sel;
do {
  sel = Number(prompt("1. Say Hello\n2. Say Goodbye\n3. Exit"));
  if (sel === 1) {
    alert("Hello!");
  } else if (sel === 2) {
    alert("Goodbye!");
  } else if (sel === 3) {
    alert("Program is Ended!");
  } else {
    alert("Invalid value, try again");
  }
} while (sel !== 3);

// ATM Menu
let choise;
let balance = 4000;

do {
  choise = Number(
    prompt(
      `Welcome To ATM Menu\n1. check balance\n2. Deposit\n3. Withdraw\n4. Exit`,
    ),
  );

  if (choise === 1) {
    alert(`Your Current balance is: ${balance}`);
  } else if (choise === 2) {
    let payment = Number(prompt(`Enter deposit amount:`));
    alert(
      `Your ${payment} is Added\nNow your current balance is ${(payment += balance)}`,
    );
  } else if (choise === 3) {
    let payment = Number(prompt(`Enter withdraw amount:`));
    if (payment <= balance) {
      alert(
        `Your ${payment} is withdraw successfully\nNow your current balance is: ${(payment -= balance)}`,
      );
    } else {
      alert(`Insufficient Balance!`);
    }
  } else if (choise === 4) {
    alert("Thank You for Using ATM Menu!");
  } else {
    alert("Invalid value, Please try again!");
  }
} while (choise === 1 || choise === 2 || choise === 3 || choise !== 4);

// for in Loop
// Print Object Keys
const student = {
  name: "Ali",
  age: 20,
  grade: "A",
};

for (let key in student) {
  console.log(key);
}

// console key + value
const stu = {
  name: "Ali",
  age: 20,
  grade: "A",
};

for (let key in stu) {
  console.log(`${key}: ${stu[key]}`);
}

// for of loop
// Print fruit values
const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Sum and Average
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

let average = sum / numbers.length;
console.log("Sum:", sum);
console.log("Average:", average);

// break Statement
// Stop at 10
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    break;
  }

  console.log(i);
}

// continue Statement
// Skip Out-of-Stock Products
let stock = 1;
while (stock <= 10) {
  if (stock === 5) {
    break;
  }
  console.log(`Product= ${stock}`);
  stock++;
}
