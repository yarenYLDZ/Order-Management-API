const express = require("express");
const bodyParser = require("body-parser");
const router = require("./route/router");
const mysql = require('mysql');

const app = express();

// Middleware
app.use(bodyParser.json());

// MySQL bağlantı bilgileri
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'yaren08YLDZ',
  database: 'order'
};

// MySQL'e bağlan
const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL veritabanına bağlandı...');
});

// Routes
app.use("/", router);

// Sunucuyu dinle
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});

module.exports = db; // db nesnesini dışa aktarabilirsiniz
