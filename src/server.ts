import express from "express";
import { portNumber } from "./view/network/constants.js";

const server = express();

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const publicDirectoryPath = path.join(__dirname, ".\\views");
const publicDirectoryPath = path.join(__dirname, ".\\view");
server.use(express.static(publicDirectoryPath));

server.listen(portNumber, () => {
  console.log("start:" + portNumber);
});
