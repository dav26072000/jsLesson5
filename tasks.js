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

const f1 = redundant("apple");
console.log(f1());
