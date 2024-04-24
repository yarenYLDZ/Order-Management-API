const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");
const orderController = require("../controller/orderController");
const orderDetailController = require("../controller/orderDetailController");
const productController = require("../controller/productController");

// Customer Routes
router.post("/customers", customerController.addCustomer);
router.get("/customers", customerController.getAllCustomers);
router.delete("/customers/:id", customerController.deleteCustomer);

// Order Routes
router.post("/orders", orderController.addOrder);
router.get("/orders", orderController.getAllOrders);
router.get("/orders/:id", orderController.getOrderById);
router.delete("/orders/:id", orderController.deleteOrder);

// Order Detail Routes
router.post("/order-details", orderDetailController.addOrderDetail);
router.get("/order-details", orderDetailController.getAllOrderDetails);
router.get("/order-details/:id", orderDetailController.getOrderDetailById);
router.delete("/order-details/:id", orderDetailController.deleteOrderDetail);

// Product Routes
router.post("/products", productController.addProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
