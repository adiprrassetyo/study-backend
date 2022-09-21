/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require("http");
const { PORT = 3003 } = process.env; // Ambil port dari environment variable

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
  // Memberi status 200
  res.writeHead(200);
  res.end("Halo dari server!");
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, "localhost", () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
});
