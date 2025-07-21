# E-commerce API

---

## 📜 Introduction

This is the backend API for a comprehensive E-commerce application. It handles all server-side logic, including product management, user authentication, and shopping cart operations. The API is built with a modern JavaScript stack, featuring Node.js and Express, and it leverages MongoDB for data persistence.

Key functionalities include secure endpoints via JWT, middleware for logging requests, CORS configuration for accommodating client applications, and detailed API documentation through Swagger.

---

## ✨ Features

* **User Authentication:** Secure user signup and signin functionalities using JWT (JSON Web Tokens) for authenticating subsequent requests.
* **Product Management:** Complete CRUD operations for products, allowing sellers to manage their inventory. Users can also filter and rate products.
* **Shopping Cart:** Functionality for users to add, view, and remove items from their shopping cart.
* **API Security:** Endpoints for products and cart items are protected and can only be accessed with a valid JWT.
* **API Documentation:** Interactive API documentation is available through Swagger UI at the `/api-docs` endpoint.
* **Logging:** A logger middleware is implemented to record all incoming requests with their payloads, which is useful for debugging and monitoring.
* **Error Handling:** A centralized error handling mechanism is in place to manage application-specific and server errors gracefully.
* **CORS:** Cross-Origin Resource Sharing (CORS) is enabled to allow requests from specified origins.

---

## 🔌 API Endpoints

The following is a summary of the available API endpoints. For detailed information on request bodies and responses, please refer to the [Swagger Documentation](http://localhost:3200/api-docs).

### Users API

* `POST /api/users/signin`: Authenticates a user and returns a JWT token upon successful login.
* `POST /api/users/signup`: Registers a new user with the platform.

### Products API

* `GET /api/products`: Retrieves a list of all available products. **Done**
* `POST /api/products`: Adds a new product (requires authentication). **Done**
* `GET /api/products/filter`: Filters products based on query parameters. **Done**
* `POST /api/products/rate`: Allows authenticated users to rate a product. **Done**
* `GET /api/products/:id`: Fetches a single product by its ID. **Done**

### Cart Items API

* `GET /api/cartItems`: Retrieves all items in the user's cart (requires authentication). **Done**
* `POST /api/cartItems`: Adds an item to the user's cart (requires authentication). **Done**
* `DELETE /api/cartItems/:id`: Removes a specific item from the cart (requires authentication). **Done**

---

## 🛠️ Technologies & Dependencies

The application is built using the following technologies and libraries:

* **Node.js & Express.js:** For the server-side environment and framework.
* **MongoDB:** As the NoSQL database for storing application data.
* **bcrypt:** For hashing user passwords before storing them.
* **jsonwebtoken:** For implementing JWT-based authentication.
* **swagger-ui-express:** To provide interactive API documentation.
* **cors:** To enable and configure Cross-Origin Resource Sharing.
* **multer:** Middleware for handling `multipart/form-data`, used for file uploads.

---

## 🚀 Getting Started

To get a local copy up and running, please follow these steps.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm (Node Package Manager)
* MongoDB instance (local or cloud)

### Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory**
    ```bash
    cd e-com-api
    ```
3.  **Install dependencies**
    ```bash
    npm install
    ```
4.  **Configure Environment Variables**
    You may need to set up a `.env` file for your MongoDB connection string and other secrets. The server connects to MongoDB upon starting.
5.  **Start the server**
    ```bash
    npm start
    ```
    The server will start on port 3200. You can access the API at `http://localhost:3200`.
