const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("app.js", "utf8");

assert(app.includes("http.createServer"), "HTTP server must exist");
assert(app.includes("process.env.PORT || 3000"), "App must use port 3000 by default");
assert(app.includes("Welcome to My DevOps Project"), "Homepage must include the welcome heading");

console.log("All tests passed!");
