# Node.js: HTTP Server

File [`index.js`](./index.js) adalah sebuah file yang berisi implementasi dari
HTTP server yang ditulis menggunakan Node.js.

Untuk menjalankan HTTP server tersebut, cukup jalankan perintah berikut di dalam
terminal:

```bash
node index.js
```

HTTP server ini memiliki dua endpoint, yaitu:
- `GET /`
- `POST /api/v1/login`

## `GET /`

Untuk melakukan request pada endpoint ini, gunakan `curl` atau Postman, berikut
contoh perintah dengan menggunakan `curl`:

```bash
curl -X GET localhost:8000
```

## `POST /api/v1/login`

Untuk melakukan request pada endpoint ini, gunakan `curl` atau Postman, berikut
contoh perintah dengan menggunakan `curl`:

```bash
curl -X POST localhost:8000/api/v1/login
```
