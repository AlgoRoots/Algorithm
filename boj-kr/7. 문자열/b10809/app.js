const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const letters = input[0].split("");
console.log(letters);
const arr = [];
soulution();
function soulution() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  console.log(alpha);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);

  for (let j = 0; j < alphabet.length; j++) {
    arr.push(letters.indexOf(alphabet[j]));
  }

  console.log(arr.join(" "));
}
