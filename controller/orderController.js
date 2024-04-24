const Order = require("../model/orderModel");

// Sipariş ekleme
exports.addOrder = async (req, res) => {
    try {
        const { CustomerPhone, OrderDate, TotalAmount } = req.body;
        const newOrder = await Order.create({ CustomerPhone, OrderDate, TotalAmount });
        res.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Tüm siparişleri listeleme
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Belirli bir siparişi getirme
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Sipariş silme
exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.destroy({ where: { OrderID: id } });
        if (deletedOrder) {
            res.status(200).json({ message: "Order deleted successfully" });
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
