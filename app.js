
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DevOps CI/CD Demo</title>
</head>
<body>
    <h1>New Feature Branch</h1>
    <p>Node.js application deployed using Jenkins CI/CD.</p>
    <p>Version: Feature</p>
    <p>This is a new feature developed using Git branching and Jenkins CI/CD.</p>
</body>
</html>`);
});

const PORT = Number(process.env.PORT || 3000);

server.listen(PORT, () => {
    console.log(`Application running at http://localhost:${PORT}`);
});
