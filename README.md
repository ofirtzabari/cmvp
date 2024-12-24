# CMVP - Multi-Vendor Platform with Crypto Payments

## **Overview**
CMVP (Crypto Multi-Vendor Platform) is a web application designed to facilitate a multi-vendor e-commerce platform where users can purchase products using cryptocurrency. This project provides a seamless and secure environment for vendors to list their products and for customers to make purchases using crypto payments.

## **Technology Stack**
### **Frontend:**
- **React.js** - Used for building the user interface.
- **Tailwind CSS** - For responsive and modern design.
- **Axios** - For making HTTP requests.

### **Backend:**
- **Node.js** - Server-side runtime environment.
- **Express.js** - Framework for building RESTful APIs.
- **MongoDB + Mongoose** - NoSQL database for data storage.
- **Multer** - Middleware for handling file uploads.
- **Dotenv** - For managing environment variables.
- **jsonwebtoken (JWT)** - For authentication and secure token management.
- **Cors** - To handle cross-origin requests.

### **Containerization & Deployment:**
- **Docker & Docker Compose** - For containerized development and deployment.
- **Kubernetes (optional)** - Can be used for scaling in production environments.

## **Features**
- **User Authentication:**
  - Sign up, login, and JWT-based authentication.
  - Secure password hashing.

- **Vendor Management:**
  - Vendors can create accounts and list products.
  - Image upload support for product listings.

- **Crypto Payments:**
  - Integration with cryptocurrency payment gateways (future implementation).

- **File Uploads:**
  - Using Multer for handling image uploads.

- **Error Handling:**
  - Centralized error handling with custom error classes.

- **Responsive Design:**
  - Modern UI with Tailwind CSS.

- **Environment Configuration:**
  - Secure configuration using dotenv for environment variables.

- **RESTful API:**
  - Fully documented and structured API for communication between frontend and backend.

- **Docker Integration:**
  - Easy setup and deployment using Docker and Docker Compose.

## **Planned Features**
- **Payment Integration:**
  - Enable secure crypto payments.
- **Order Tracking:**
  - Real-time updates for order status.
- **Admin Dashboard:**
  - Manage vendors and users.
- **Search and Filtering:**
  - Advanced product search and filtering options.

## **Contributors**
- **Ofir Tzabari** - Lead Developer & Architect

## **License**
This project is licensed under the [MIT License](LICENSE).

