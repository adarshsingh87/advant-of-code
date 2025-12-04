import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8");
const lines = input.split("\n");
let answer = 0;

lines.forEach((l) => {
  if (l === "") {
    return;
  }
  let finalAns = "";
  const digits = l.split("").map((d) => Number(d));
  const firstDigit = Math.max(...digits);
  const largeIndex = digits.indexOf(firstDigit);
  if (largeIndex === digits.length - 1) {
    const secondDig = digits.pop();
    finalAns += Math.max(...digits).toString();
    finalAns += secondDig.toString();
  } else {
    const secArr = digits.slice(largeIndex + 1);
    const secDig = Math.max(...secArr);
    finalAns += firstDigit.toString();
    finalAns += secDig.toString();
  }

  answer += Number(finalAns);
});

console.log(answer);
