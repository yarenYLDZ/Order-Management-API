const Customer = require("../model/customerModel");

// Müşteri ekleme
exports.addCustomer = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Phone, Address } = req.body;
        const newCustomer = await Customer.create({ FirstName, LastName, Email, Phone, Address });
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Müşteri listeleme
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Müşteri silme
exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCustomer = await Customer.destroy({ where: { CustomerID: id } });
        if (deletedCustomer) {
            res.status(200).json({ message: "Customer deleted successfully" });
        } else {
            res.status(404).json({ message: "Customer not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
