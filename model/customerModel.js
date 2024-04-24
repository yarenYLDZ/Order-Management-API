const Sequelize = require("sequelize");
const db = require("../config/db");

const Customer = db.define("customer", {
    CustomerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FirstName: {
        type: Sequelize.STRING,
    },
    LastName: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    Phone: {
        type: Sequelize.STRING,
    },
    Address: {
        type: Sequelize.STRING,
    },
},  {
    timestamps: false // timestamps özelliğini false olarak ayarlayın
});

module.exports = Customer;
