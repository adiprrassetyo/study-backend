const http = require("node:http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error : file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
    } else if (url === "/contact") {
      res.write("<h1>Ini adalah Halaman Contact</h1>");
      res.end;
    } else {
      fs.readFile("./index", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error : file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000..");
  });
