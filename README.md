# 📦 Order Management API

This project is a **RESTful API** designed for managing customers and their orders.  
Users can create, list, update, and delete orders efficiently with built-in validation rules.

---

## 🚀 Features
- ✅ Create Order (Insert)
- 📋 List Orders
- ❌ Delete Order (Cancel)
- ✏️ Update Order (with 10-minute rule)

---

## 🛠️ Technologies Used
- **Backend:** Node.js (Express.js)
- **Database:** SQL-based (Customers, Orders, OrderDetails, Products tables)
- **API Testing:** Postman
- **IDE:** Visual Studio Code

---

## 🔗 API Endpoints

### 1️⃣ Create Order  
`POST /orders`  
- Creates a new customer record if the phone number does not exist.  
- Stores order and product details in related tables.  
- Prevents duplicate customer creation with the same phone number.  

### 2️⃣ List Orders  
`POST /orderList`  
- Lists all orders for a customer using first name, last name, and phone number.  
- Returns error messages if information is invalid or no orders are found.  

### 3️⃣ Delete Order  
`DELETE /ordersDeleted`  
- Deletes an order if the phone number and orderId match.  
- If not matched, no deletion is performed.  

### 4️⃣ Update Order  
`PUT /orderUpdated`  
- Updates an order within **10 minutes** after it is created.  
- Products must exist in the Products table, otherwise update fails.  

---

## 📂 Database Structure
- **Customers**
- **Orders**
- **OrderDetails**
- **Products**

---

## ⚡ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/order-management-api.git
