const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      res.write("<h1>Ini adalah Halaman About</h1>");
      res.end;
    } else if (url === "/contact") {
      res.write("<h1>Ini adalah Halaman Contact</h1>");
      res.end;
    } else {
      res.write("Hello World!");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000..");
  });
