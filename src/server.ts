import express from "express";
import { portNumber } from "./view/network/constants.js";
import { fileURLToPath } from "url";
import path from "path";

const server = express();

// ES 모듈에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 경로 설정
const publicDirectoryPath = path.join(__dirname, "view");
server.use(express.static(publicDirectoryPath));

// 서버 실행
const PORT = portNumber ?? 3000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
