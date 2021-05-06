// 1. Create a function that implements partial sum
let numbersSum = (num1) => {
  let getNum2 = (num2) => {
    return num1 + num2;
  };
  return getNum2;
};

// 2.Write a function redundant that takes in a string str and returns a function that return

let redundant = (str) => {
  let getStr = () => {
    return str;
  };
  return getStr;
};
// const f1 = redundant("apple");
// console.log(f1());

//3. Write a function thatreturns an anonymous function, which transforms its input by adding a particular
// suffix at the end.

let add_suffix = (suf) => {
  let getStr = (str) => {
    return str + suf;
  };
  return getStr;
};

// const add_ly = add_suffix("ly");
// console.log(add_ly("hope"));

//4.Create a function printAfter that calls its argument after printing hello world

let printAfter = (str) => {
  let printBefore = () => {
    console.log("hello world");
    return str;
  };
  return printBefore;
};

let pA = printAfter("bob");
console.log(pA());
