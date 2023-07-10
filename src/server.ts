import express from "express";

const server = express();

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDirectoryPath = path.join(__dirname, ".\\views");
server.use(express.static(publicDirectoryPath));

server.listen(3001, () => {
  console.log("started");
});
