const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>DevOps CI/CD Demo</title></head>
<body>
    <h1>Welcome to My DevOps Project</h1>
    <p>Node.js application deployed using Jenkins CI/CD.</p>
    <p>Version: Main</p>
</body>
</html>`);
});

const PORT = Number(process.env.PORT || 3000);
server.listen(PORT, () => {
    console.log(`Application running at http://localhost:${PORT}`);
});
