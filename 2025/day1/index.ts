import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8");
let startDial = 50;
const dials: number[] = input
  .split("\n")
  .map((l) => l.replace("R", ""))
  .map((l) => l.replace("L", "-"))
  .map(Number)

let answer = 0;

dials.forEach((d) => {
  new Array(Math.abs(d)).fill(d > 0 ? 1 : -1).forEach((d2) => {
    startDial += d2;
    if (startDial % 100 === 0) {
      answer++;
    }
  });
});

console.log(answer);
