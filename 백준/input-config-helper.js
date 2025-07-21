const fs = require("fs");

/**
 * 입력 파싱 설정을 정의합니다.
 * @param {'string'|'number'|'oneLine'|'multiLine'|'multiLineSpace'|'custom'} type
 * @param {Function} [parserOrMapperFn=null] - 'custom' 타입의 파서 함수 또는 배열 타입의 매퍼 함수
 * @returns {Object} 입력 설정 객체
 */
function defineInput(type, parserOrMapperFn = null) {
  const config = { type };

  if (parserOrMapperFn) {
    if (type === "custom") {
      config.customParserCode = parserOrMapperFn.toString();
    } else if (["oneLine", "multiLine", "multiLineSpace"].includes(type)) {
      config.mapperCode = parserOrMapperFn.toString();
    }
  }

  return config;
}

/**
 * 로컬 테스트를 위해 정의된 설정에 따라 실제 입력을 파싱합니다.
 * @param {Object} config - defineInput으로 정의된 설정
 * @returns {*} 파싱된 입력 데이터
 */
function getInput(config) {
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const raw = fs.readFileSync(filePath).toString().trim();

  if (config.type === "custom") {
    if (!config.customParserCode) {
      throw new Error("Custom 타입은 파서 함수가 필요합니다.");
    }
    const customParserFn = eval(`(${config.customParserCode})`);
    return customParserFn(raw);
  }

  let parsedData;
  switch (config.type) {
    case "string":
      parsedData = raw;
      break;
    case "number":
      parsedData = Number(raw);
      break;
    case "oneLine":
      parsedData = raw.split(" ");
      break;
    case "multiLine":
      parsedData = raw.split("\n");
      break;
    case "multiLineSpace":
      parsedData = raw.split("\n").map((line) => line.split(" "));
      break;
    default:
      throw new Error(`지원하지 않는 inputConfig 타입: ${config.type}`);
  }

  if (config.mapperCode) {
    const mapperFn = eval(`(${config.mapperCode})`);
    if (config.type === "multiLineSpace") {
      parsedData = parsedData.map((line) => line.map(mapperFn));
    } else {
      // oneLine, multiLine
      parsedData = parsedData.map(mapperFn);
    }
  }

  return parsedData;
}

module.exports = { defineInput, getInput };
