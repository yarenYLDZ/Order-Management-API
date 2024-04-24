const Sequelize = require("sequelize");
const db = require("../config/db");

const OrderDetail = db.define("order_detail", {
    DetailID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    OrderID: {
        type: Sequelize.INTEGER,
    },
    ProductID: {
        type: Sequelize.INTEGER,
    },
    Quantity: {
        type: Sequelize.INTEGER,
    },
    TotalPrice: {
        type: Sequelize.FLOAT,
    },
},  {
    timestamps: false // timestamps özelliğini false olarak ayarlayın
});

module.exports = OrderDetail;
