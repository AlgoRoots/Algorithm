const fs = require("fs");
const path = require("path");

const { defineInput } = require("./input-config-helper.js");

const baseDir = process.env.INIT_CWD || process.cwd();
const args = process.argv;
const inputFlagIndex = args.indexOf("-i");
const inputName = inputFlagIndex !== -1 ? args[inputFlagIndex + 1] : "app.js";
const inputPath = path.join(baseDir, inputName);
const outputPath = path.join(baseDir, "solution.js");

const content = fs.readFileSync(inputPath, "utf-8");

if (fs.existsSync(outputPath)) {
  fs.unlinkSync(outputPath);
  console.log("🗑️ 기존 solution.js 삭제 완료");
}

const findDefineInputCall = (code) => {
  const searchString = "const inputConfig = defineInput(";
  const startIndex = code.indexOf(searchString);
  if (startIndex === -1) return null;

  const openParenIndex = startIndex + searchString.length - 1;
  let parenCount = 1;
  let endIndex = -1;

  for (let i = openParenIndex + 1; i < code.length; i++) {
    if (code[i] === "(") parenCount++;
    else if (code[i] === ")") parenCount--;

    if (parenCount === 0) {
      let tempIndex = i + 1;
      while (tempIndex < code.length && /\s/.test(code[tempIndex])) tempIndex++;
      endIndex = code[tempIndex] === ";" ? tempIndex : i;
      break;
    }
  }
  return endIndex !== -1 ? code.substring(startIndex, endIndex + 1) : null;
};

const defineInputCall = findDefineInputCall(content);

if (!defineInputCall) {
  console.error("defineInput(...) 호출을 찾을 수 없습니다.");
  process.exit(1);
}

let inputConfig;

try {
  const assignmentPart = defineInputCall
    .substring(defineInputCall.indexOf("=") + 1)
    .replace(";", "")
    .trim();
  inputConfig = eval(assignmentPart);
} catch (e) {
  console.error("defineInput 호출을 평가하는 중 오류 발생:", e.message);
  process.exit(1);
}

if (!inputConfig) {
  console.error("inputConfig가 정의되지 않았습니다.");
  process.exit(1);
}

const { type: inputType, mapperCode = "", customParserCode = "" } = inputConfig;

const parserMap = {
  string: `fs.readFileSync(filePath).toString().trim()`,
  number: `Number(fs.readFileSync(filePath).toString().trim())`,
  oneLine: `fs.readFileSync(filePath).toString().trim().split(' ')`,
  multiLine: `fs.readFileSync(filePath).toString().trim().split('\\n')`,
  multiLineSpace: `fs.readFileSync(filePath).toString().trim().split('\\n').map(line => line.split(' '))`,
};

let finalParsedCode;

if (inputType === "custom") {
  if (!customParserCode) {
    console.error("Custom 타입은 파서 함수가 필요합니다.");
    process.exit(1);
  }

  const arrowIndex = customParserCode.indexOf("=>");
  if (arrowIndex !== -1) {
    let param = customParserCode.substring(0, arrowIndex).trim();
    if (param.startsWith("(") && param.endsWith(")")) {
      param = param.substring(1, param.length - 1).trim();
    }

    if (param) {
      const body = customParserCode.substring(arrowIndex + 2).trim();
      const baseReader = `fs.readFileSync(filePath).toString().trim()`;
      const replacementRegex = new RegExp(`\\b${param}\\b`);
      finalParsedCode = body.replace(replacementRegex, baseReader);
    } else {
      finalParsedCode = `(${customParserCode})(fs.readFileSync(filePath).toString().trim())`;
    }
  } else {
    finalParsedCode = `(${customParserCode})(fs.readFileSync(filePath).toString().trim())`;
  }
} else {
  finalParsedCode = parserMap[inputType];
  if (!finalParsedCode) {
    console.error(`지원하지 않는 inputConfig 타입: ${inputType}`);
    process.exit(1);
  }

  if (mapperCode) {
    if (inputType === "multiLineSpace") {
      finalParsedCode += `.map(line => line.map(${mapperCode}))`;
    } else if (["oneLine", "multiLine"].includes(inputType)) {
      finalParsedCode += `.map(${mapperCode})`;
    }
  }
}

const solutionFunctionIndex = content.indexOf("function solution");
if (solutionFunctionIndex === -1) {
  console.error(
    "`function solution(...)`을 찾을 수 없습니다. app.js 파일 구조를 확인해주세요."
  );
  process.exit(1);
}

const solutionContent = content.substring(solutionFunctionIndex);

const fsHeader = `
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
`;

const finalContent =
  fsHeader.trim() +
  "\n\n" +
  `const input = ${finalParsedCode};` +
  "\n\n" +
  solutionContent.trim();

fs.writeFileSync(outputPath, finalContent, "utf-8");

console.log(
  `solution.js 생성 완료 from ${inputName} (type: ${inputType}${
    mapperCode ? " + mapper" : ""
  }${customParserCode ? " + customParser" : ""})`
);
