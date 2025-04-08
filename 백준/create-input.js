const fs = require("fs");

const createInput = (filePath = "./input.txt", selectCase) => {
  const path = process.platform === "linux" ? "/dev/stdin" : filePath;

  const raw = fs.readFileSync(path).toString().trim();

  const api = {
    문자: () => raw,
    한줄: (mapper = String) => raw.split(" ").map(mapper),
    여러줄: (mapper = String) => raw.split("\n").map(mapper),
    여러줄_띄어쓰기: (mapper = String) =>
      raw.split("\n").map((line) => line.split(" ").map(mapper)),
    커스텀: (parserFn) => parserFn(raw),
  };

  return api;
};

module.exports = { createInput };
