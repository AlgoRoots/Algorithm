const fs = require("fs");
const path = require("path");

const baseDir = process.env.INIT_CWD || process.cwd();
const args = process.argv;
const outputFlagIdx = args.indexOf("-o");
const outputName = outputFlagIdx !== -1 ? args[outputFlagIdx + 1] : "@template";

const templatePath = path.join(__dirname, "@template");
const newPath = path.join(baseDir, outputName);

if (fs.existsSync(newPath)) {
  console.error(`이미 있는 경로입니다. ${newPath}`);
} else {
  fs.cpSync(templatePath, newPath, { recursive: true });
  const escapedPath = outputName.replace(/(["\s'$`\\])/g, "\\$1");

  console.log(`New Template 생성 완료 (${newPath})`);
  console.log(`\n다음 명령어를 복사해서 실행하세요:\ncd ${escapedPath}`);
}
