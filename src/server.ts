import express from "express";

const server = express();
//import path from 'path';
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDirectoryPath = path.join(__dirname, ".\\views");
server.use(express.static(publicDirectoryPath));
//server.use(express.static(__dirname + "\\views"));

server.get("/api", (req: any, res: any) => {
  console.log(__dirname);
  req;
  //res.status(200).json("start NodeTS!!!~~~~");
  var html = `
<html>
<body>Hello Web</body>
<html>
`;
  res.end(html);
});

server.listen(3001, () => {
  console.log("started");
});
