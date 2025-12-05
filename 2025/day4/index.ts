import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");
// const input = `..@@.@@@@.
// @@@.@.@.@@
// @@@@@.@.@@
// @.@@@@..@.
// @@.@@@@.@@
// .@@@@@@@.@
// .@.@.@.@@@
// @.@@@.@@@@
// .@@@@@@@@.
// @.@.@@@.@.
// `;

function recurrse(matrix: string[][]) {
  let answer = 0;
  matrix.forEach((row, ri) => {
    row.forEach((c, ci) => {
      if (c === ".") return;
      const top = matrix?.[ri - 1]?.[ci];
      const left = matrix?.[ri]?.[ci - 1];
      const right = matrix?.[ri]?.[ci + 1];
      const bottom = matrix?.[ri + 1]?.[ci];
      const topLeft = matrix?.[ri - 1]?.[ci - 1];
      const topRight = matrix?.[ri - 1]?.[ci + 1];
      const bottomLeft = matrix?.[ri + 1]?.[ci - 1];
      const bottomRight = matrix?.[ri + 1]?.[ci + 1];
      const adjRoll = [
        top,
        left,
        right,
        bottom,
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
      ].filter((c) => c === "@");
      if (adjRoll.length < 4) {
        matrix[ri][ci] = ".";
        answer++;
      }
    });
  });
  if (answer === 0) {
    return 0;
  } else {
    return answer + recurrse(matrix);
  }
}

function main() {
  const lines = input.split("\n").filter((l) => l !== "");

  const matrix: string[][] = lines.map((l) => l.split(""));

  console.log(recurrse(matrix));
}

main();
