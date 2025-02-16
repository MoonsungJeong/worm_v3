import express from "express";
import { portNumber } from "./view/network/constants.js";
import { fileURLToPath } from "url";
import path from "path";

const server = express();

// Get directory path __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set static file path
const publicDirectoryPath = path.join(__dirname, "view");
server.use(express.static(publicDirectoryPath));

// Start Server
const PORT = portNumber ?? 3000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
