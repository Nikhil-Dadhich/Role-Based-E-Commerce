
# 🛒 Role-Based E-Commerce

A full-stack e-commerce platform built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It supports **role-based access control**, giving distinct permissions to Admins and Customers. The project includes product management, cart and order handling, secure login, CSRF protection, PDF invoice generation, and password reset via email.

---

## ✨ Features

- 🔐 **Role-Based Access Control:** Separate permissions for Admin and Customer roles  
- 🛍️ **Product Management:** Admins can add, edit, and delete products  
- 👤 **Authentication:** Secure registration, login, and sessions  
- 🛒 **Shopping Cart:** Customers can add products to their cart and place orders  
- 📦 **Order Management:** Admins can manage all orders; customers see their own  
- 📄 **Invoice Generation:** PDF invoices generated automatically on order  
- 🔒 **CSRF Protection:** All forms secured using CSRF tokens  
- 🔁 **Password Reset via Email:** Reset link sent securely to registered email  
- 🎨 **Frontend Templating:** EJS-based responsive UI  
- 🧱 **Modular Codebase:** Organized using MVC pattern  

---

## 🗂️ Project Structure

```
Role-Based-E-Commerce/
│
├── controllers/       # Route logic (products, users, orders, auth)
├── data/              # Seed scripts or initial data (optional)
├── images/            # Uploaded or static product images
├── middleware/        # Auth, CSRF, error handling logic
├── models/            # Mongoose schemas (User, Product, Order)
├── public/            # Static assets (CSS, client-side JS)
├── routes/            # Express routes split by functionality
├── util/              # Utility helpers (PDF generation, email)
├── views/             # EJS templates (pages, partials)
├── app.js             # Main Express server
├── package.json       # Project dependencies and scripts
└── .gitignore         # Git-ignored files
```

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v14 or higher)  
- npm  
- MongoDB (local or Atlas)  

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikhil-Dadhich/Role-Based-E-Commerce.git
   cd Role-Based-E-Commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** and add:
   ```ini
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password_or_app_password
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the app** at:
   ```
   http://localhost:3000
   ```

---

## 📌 Usage

| Role     | Permissions                                                         |
|----------|----------------------------------------------------------------------|
| Admin    | Manage products, view/manage all orders, view invoices              |
| Customer | Browse products, manage cart, place orders, view invoices, reset password |

🧾 After placing an order, customers can download a **PDF invoice**  
📧 Forgot password? Use the **email reset link** feature

---

## 🧾 Invoice Example

Each order automatically generates a PDF invoice with:

- Order ID  
- Product list  
- Total cost  
- Timestamp  
- Customer name & email  

---

## 🔐 Security Features

- ✅ CSRF tokens on all forms  
- 🔒 Passwords hashed with **bcrypt**  
- 📧 Password reset via secure email links with token expiry  
- 🧪 Error-handling middleware and route guards  

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Templating:** EJS, Bootstrap  
- **Security:** bcrypt, CSRF middleware, sessions  
- **PDF Generation:** pdfkit  
- **Email:** nodemailer  
