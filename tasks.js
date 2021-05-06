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

// 6. Write a function which remove elements with length <= 3

let removeLessThanThree = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    if (el.length > 3) {
      newArr.push(el);
    }
  });
  return newArr;
};

//7. Given an array. Determine whether it consists only from uniques or not.

let returnIfUniq = (arr) => {
  let unique = new Set(arr);
  if (arr.length === unique.size) {
    return true;
  } else {
    return false;
  }
};

//8. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter.
