import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8");
const lines = input.split("\n");

let answer = 0;
const N = 12; 

lines.forEach((l) => {
  const line = l.trim();
  if (line === "") {
    return;
  }
  
  const digits: number[] = line.split("").map((d) => Number(d));
  const K = digits.length;
  
  if (K < N) {
      console.warn(`Line "${line}" has less than ${N} digits. Skipping.`);
      return;
  }
  
  let discards = K - N;
  
  const resultStack: number[] = [];
  
  for (const digit of digits) {
    while (discards > 0 && resultStack.length > 0 && digit > resultStack[resultStack.length - 1]) {
      resultStack.pop(); 
      discards--;
    }
    
    resultStack.push(digit);
  }
  
  const finalAnsArray = resultStack.slice(0, N);
  
  const finalAns = finalAnsArray.join("");
  answer += Number(finalAns);
});

console.log(answer);
