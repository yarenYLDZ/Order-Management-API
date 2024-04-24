const OrderDetail = require("../model/orderDetailModel");

// Sipariş detayı ekleme
exports.addOrderDetail = async (req, res) => {
    try {
        const { OrderID, ProductID, Quantity, TotalPrice } = req.body;
        const newOrderDetail = await OrderDetail.create({ OrderID, ProductID, Quantity, TotalPrice });
        res.status(201).json(newOrderDetail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Tüm sipariş detaylarını listeleme
exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Belirli bir sipariş detayını getirme
exports.getOrderDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderDetail = await OrderDetail.findByPk(id);
        if (orderDetail) {
            res.status(200).json(orderDetail);
        } else {
            res.status(404).json({ message: "Order detail not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Sipariş detayı silme
exports.deleteOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrderDetail = await OrderDetail.destroy({ where: { DetailID: id } });
        if (deletedOrderDetail) {
            res.status(200).json({ message: "Order detail deleted successfully" });
        } else {
            res.status(404).json({ message: "Order detail not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
