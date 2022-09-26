# Express.js 03

File [`index.js`](./index.js) adalah sebuah file yang berisi implementasi dari
HTTP server yang ditulis menggunakan Express.js.

Untuk menjalankan HTTP server tersebut, cukup jalankan perintah berikut di dalam
terminal:

1. Install dependency

   ```bash
   # Pengguna NPM
   npm install

   # Pengguna Yarn
   yarn install
   ```

2. Jalankan server

   ```
   node index.js
   ```

HTTP server ini memiliki satu endpoint, yaitu:

- `GET /api/v1/books`
- `GET /api/v1/books/:id`
- `POST /api/v1/books`

## `GET /api/v1/books`

Untuk melakukan request pada endpoint ini, gunakan `curl` atau Postman, berikut
contoh perintah dengan menggunakan `curl`:

```bash
curl -X GET 'localhost:8000/api/v1/books?author=Fikri'
```

## `GET /api/v1/books/:id`

Untuk melakukan request pada endpoint ini, gunakan `curl` atau Postman, berikut
contoh perintah dengan menggunakan `curl`:

```bash
curl -X GET 'localhost:8000/api/v1/books/1'
```

## `POST /api/v1/books`

Untuk melakukan request pada endpoint ini, gunakan `curl` atau Postman, berikut
contoh perintah dengan menggunakan `curl`:

```bash
curl \
  -X POST \
  -H 'Content-Type: application/x-www-urlencoded' \
  --data "title=Industrial%20Society%20And%20It's%20Future" \
  'localhost:8000/api/v1/books?author=Fikri'
```
