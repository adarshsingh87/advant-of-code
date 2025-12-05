import fs from "fs";

const input = fs.readFileSync('./input.txt', 'utf8');

// const input = `
// 3-5
// 10-14
// 16-20
// 12-18
//
// 1
// 5
// 8
// 11
// 17
// 32
// `;

const [fineRange, productIds] = input.split("\n\n");

const fineRanges = fineRange.split("\n").filter(Boolean);
const productIdsArr = productIds.split("\n").filter(Boolean).map(Number);

let answer = 0;

const minList: number[] = [];
const maxList: number[] = [];

fineRanges.forEach((range) => {
  const [from, to] = range.split("-").map(Number);
  minList.push(from);
  maxList.push(to);
});

productIdsArr.forEach((productId) => {
  for (let i = 0; i < minList.length; i++) {
    if (productId >= minList[i] && productId <= maxList[i]) {
      answer++;
      break;
    }
  }
});

console.log(answer);
