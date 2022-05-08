"use strict";

const calculator = document.querySelector(".calculator");
console.log(calculator);
const keys = document.getElementById("calculator-keys");
console.log(keys);
let currentOutputEl = document.getElementById("current");
let previousOutputEl = document.getElementById("previous");

let valueArr1 = [];
let valueArr2 = [];

// const initialInput = function (e) {
//   wrapperEl.addEventListener("click", initialInput);
//   let val = e.target.innerText;
//   if (val !== "x" && val !== "+" && val !== "-" && val !== "/") {
//     valueArr1.push(Number(val));
//     let operandOne = valueArr1.join("");
//     previousOutputEl.textContent = operandOne;
//   } else if (val === "x") {
//     previousOutputEl.classList.add("hidden");
//     wrapperEl.addEventListener("click", function () {
//       let val2 = e.target.innerText;
//       if (val2 !== "=") {
//         valueArr2.push(Number(val2));
//         let operandTwo = valueArr2.join("");
//         console.log(operandTwo);
//         currentOutputEl.textContent = operandTwo;
//       } else if (val2 === "=") {
//         let sum = operandOne * operandTwo;
//         console.log(operandOne);
//         console.log(operandTwo);
//         console.log(sum);
//         currentOutputEl.textContent = sum;
//       }
//     });
//     wrapperEl.removeEventListener("click", initialInput);
//   } else if (val === "+") {
//     previousOutputEl.classList.add("hidden");
//     wrapperEl.removeEventListener("click", initialInput);
//   } else if (val === "-") {
//     previousOutputEl.classList.add("hidden");
//     wrapperEl.removeEventListener("click", initialInput);
//   } else if (val === "/") {
//     previousOutputEl.classList.add("hidden");
//     wrapperEl.removeEventListener("click", initialInput);
//   }
// };

// const multiplication = function (event) {
//   let val2 = event.target.innerText;
//   if (val2 !== "=") {
//     valueArr2.push(Number(val2));
//     let operandTwo = valueArr2.join("");
//     console.log(operandTwo);
//     currentOutputEl.textContent = operandTwo;
//   } else if (val2 === "=") {
//     let sum = operandOne * operandTwo;
//     console.log(operandOne);
//     console.log(operandTwo);
//     console.log(sum);
//     currentOutputEl.textContent = sum;
//   }
// };

// // const secondaryInput = function (event) {
// //   let val2 = event.target.innerText;
// //   if (val2 !== "x" && val2 !== "+" && val2 !== "-" && val2 !== "/") {
// //     valueArr2.push(Number(val2));
// //     let operandTwo = valueArr2.join("");
// //     currentOutputEl.textContent = operandTwo;
// //   } else if (val2 == "x") {
// //     let theSum = operandOne + operandTwo;
// //     console.log(operandOne);
// //     console.log(operandTwo);
// //   }
// // };

// initialInput();

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    console.log(key);
    console.log(action);
    console.log(keyContent);
  }
});
