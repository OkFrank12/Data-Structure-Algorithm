const startB = (n: number) => {
  return (n * (n + 1)) / 2;
};
// console.time();
// console.log("Best Result: ", startB(1000000000));
// console.timeEnd();

const startA = (n: number) => {
  let count: number[] = [];
  for (let i = n; i >= 0; i--) {
    count.push(i);
  }
  return count.reduce((a, b) => a + b);
};

// console.time();
// console.log("OK Result: ", startA(1000000000));
// console.timeEnd();

const start = (n: number) => {
  let count: number = 0;
  for (let i = n; i >= 0; i--) {
    count += i;
  }
  return count;
};
// console.time();
// console.log("Bad Result: ", start(1000000000));
// console.timeEnd();

const revString = (str: string) => {
  let strArr: string[] = [];
  let forStr: string[] = str.split("");

  for (let i of forStr) {
    strArr.push(i);
  }
  return strArr.reverse().join("");
};

const revStringA = (str: string) => {
  let strArr: string[] = [];
  let forStr: string[] = str.split("");
  return forStr.reverse().join("");
};

const revStringB = (str: string): any => {
  if (str === "") {
    return "";
  } else {
    return revStringB(str.slice(1)) + str.slice(0, 1);
  }
};

console.time();
console.log("Worst Result: ", revString("Franklin is very handsome"));
console.timeEnd();
console.time();
console.log("Best Result: ", revStringA("Franklin is very handsome"));
console.timeEnd();
console.time();
console.log("OK Result: ", revStringB("Franklin is very handsome"));
console.timeEnd();
