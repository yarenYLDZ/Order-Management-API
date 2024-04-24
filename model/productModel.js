const Sequelize = require("sequelize");
const db = require("../config/db");

const Product = db.define("product", {
    ProductID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductName: {
        type: Sequelize.STRING,
    },
    Description: {
        type: Sequelize.STRING,
    },
    UnitPrice: {
        type: Sequelize.FLOAT,
    },
},  {
    timestamps: false // timestamps özelliğini false olarak ayarlayın
});

module.exports = Product;
