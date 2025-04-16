const fs = require("fs");
const path = require("path");

const baseDir = process.env.INIT_CWD || process.cwd(); // npm 스크립트 실행 시 최초 cwd or node process cwd
const args = process.argv;
const inputFlagIndex = args.indexOf("-i");
const inputName = inputFlagIndex !== -1 ? args[inputFlagIndex + 1] : "app.js";
const inputPath = path.join(baseDir, inputName);
const outputPath = path.join(baseDir, "solution.js");

let content = fs.readFileSync(inputPath, "utf-8");

if (fs.existsSync(outputPath)) {
  fs.unlinkSync(outputPath);
  console.log("🗑️ 기존 solution.js 삭제 완료");
}

const parserMap = {
  문자: `fs.readFileSync(filePath).toString().trim()`,
  숫자: `Number(fs.readFileSync(filePath).toString().trim())`,
  한줄: `fs.readFileSync(filePath).toString().trim().split(' ')`,
  여러줄: `fs.readFileSync(filePath).toString().trim().split('\\n')`,
  여러줄_띄어쓰기: `fs.readFileSync(filePath).toString().trim().split('\\n').map(line => line.split(' '))`,
};

const inputRegex = /createInput\(\)\.([^\(]+)\((.*?)\)/s;

const match = content.match(inputRegex);

if (!match) {
  console.error("createInput().파서(...) 라인을 찾을 수 없습니다.");
  process.exit(1);
}

const [fullMatch, methodName, mapper] = match;

if (!parserMap[methodName]) {
  console.error(`지원하지 않는 파서: ${methodName}`);
  process.exit(1);
}

let parsedCode = parserMap[methodName];

if (mapper?.trim()) {
  if (methodName === "여러줄_띄어쓰기") {
    parsedCode += `.map(line => line.map(${mapper.trim()}))`;
  } else {
    parsedCode += `.map(${mapper.trim()})`;
  }
}

content = content
  .replace(
    /const\s+\{\s*createInput[^}]*\}\s*=\s*require\(['"][^'"]+['"]\);\n?/g,
    ""
  )
  .replace(fullMatch, parsedCode);

const fsHeader = `
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
`;

const finalContent = fsHeader.trim() + "\n\n" + content.trim();
fs.writeFileSync(outputPath, finalContent, "utf-8");

console.log(
  `solution.js 생성 완료 from ${inputName} (${methodName}${
    mapper ? " + mapper" : ""
  })`
);
