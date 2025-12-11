import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");

// const input = `123 328  51 64
//  45 64  387 23
//   6 98  215 314
// *   +   *   +  `;

const lines = input.split("\n").filter((e) => e !== "");

const operations = lines
  .pop()
  ?.split(" ")
  .filter((e) => e !== " ")
  .filter((e) => e !== "")
  .map((op) => op.trim());

const numbers = lines.map((line) =>
  line
    .trim()
    .split(" ")
    .filter((e) => e !== " ")
    .filter((e) => e !== "")
    .map((n) => Number(n.trim())),
);

let answer = 0;

operations?.forEach((op, i) => {
  const vals: number[] = [];
  numbers.forEach((nums) => {
    vals.push(nums[i] || 0);
  });
  if (op === "*") {
    const temp = vals.reduce((a, b) => a * b, 1);
    console.log(temp, vals);
    answer += temp;
  } else if (op === "+") {
    const temp = vals.reduce((a, b) => a + b, 0);
    console.log(temp, vals);
    answer += temp;
  }
});

console.log(answer);
