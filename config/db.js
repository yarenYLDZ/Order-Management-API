const Sequelize = require("sequelize");

// Veritabanı bağlantı bilgileri
const dbConfig = {
  DB: "order",
  USER: "root",
  PASSWORD: "yaren08YLDZ",
  HOST: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Sequelize bağlantısı oluştur
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

module.exports = sequelize;
