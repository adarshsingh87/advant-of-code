import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");

// const input = `123 328  51 64 
//  45 64  387 23 
//   6 98  215 314
// *   +   *   +  `;

const lines = input
  .split("\n")
  .filter((e) => e !== "")
  .map((e) => e.split("").reverse().join(""));

const operations = lines.pop();

let answer = 0;

let numberToOperate: string[] = [];

for (let i = 0; i < operations.length; i++) {
  let toPush = "";

  lines.forEach((e) => {
    toPush += e[i] || " ";
  });

  numberToOperate.push(toPush.replaceAll(" ", ""));
  const operator = operations[i];
  if (operator === "*" || operator === "+") {
    if (operator === "*") {
      const temp = numberToOperate
        .map(Number)
        .reduce((a, b) => (a || 1) * (b || 1), 1);
      console.log(temp, numberToOperate);
      answer += temp;
    } else if (operator === "+") {
      const temp = numberToOperate.map(Number).reduce((a, b) => a + b, 0);
      console.log(temp, numberToOperate);
      answer += temp;
    }
    numberToOperate = [];
  }
}

console.log(answer);
