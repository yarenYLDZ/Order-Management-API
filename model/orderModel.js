const Sequelize = require("sequelize");
const db = require("../config/db");

const Order = db.define("order", {
    OrderID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CustomerPhone: {
        type: Sequelize.STRING,
    },
    OrderDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    TotalAmount: {
        type: Sequelize.FLOAT,
    },
}, {
    timestamps: false // timestamps özelliğini false olarak ayarlayın
});

module.exports = Order;
