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

//3. Write a function thatreturns an anonymous function, which transforms its input by adding a particular
// suffix at the end.

let add_suffix = (suf) => {
  let getStr = (str) => {
    return str + suf;
  };
  return getStr;
};

//4.Create a function printAfter that calls its argument after printing hello world
let printBefore = () => {
  console.log("my str");
};

let printAfter = (func) => {
  console.log("hello wordld");
  return func;
};
// let f1 = printAfter(printBefore);
// f1();

// 5.Write a function that implements filtering in array
let filterFalsyValues = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    if (el) {
      newArr.push(el);
    }
  });
  return newArr;
};
