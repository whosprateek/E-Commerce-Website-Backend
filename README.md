<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce API Readme</title>
    <style>
        body {
            font-family: sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        pre {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        code {
            font-family: 'Courier New', Courier, monospace;
        }
        .section {
            margin-bottom: 2em;
        }
        .badge {
            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
        }
        .badge-done {
            color: #fff;
            background-color: #28a745;
        }
        .badge-pending {
            color: #fff;
            background-color: #dc3545;
        }
    </style>
</head>
<body>

    <h1>E-commerce API</h1>

    <div class="section">
        <h2>Introduction</h2>
        <p>This is the backend API for an E-commerce application. It provides functionalities for managing products, users, and shopping carts. The API is built with Node.js and Express, and it uses MongoDB as the database. It also includes features like JWT authentication, request logging, and API documentation with Swagger.</p>
    </div>

    <div class="section">
        <h2>Features</h2>
        <ul>
            <li>User authentication (signup and signin) with JWT tokens.</li>
            <li>Product management (add, view, filter, and rate products).</li>
            <li>Shopping cart functionality (add, view, and remove items).</li>
            <li>Secure API endpoints using JWT authentication.</li>
            <li>Request logging for monitoring and debugging.</li>
            <li>API documentation available through Swagger UI.</li>
            <li>CORS support for cross-origin requests.</li>
            <li>Centralized error handling.</li>
        </ul>
    </div>

    <div class="section">
        <h2>API Endpoints</h2>
        <p>The API is documented using Swagger. You can find the detailed documentation at the <code>/api-docs</code> endpoint when the server is running.</p>

        <h3>Users</h3>
        <ul>
            <li><code>POST /api/users/signup</code>: Register a new user (customer or seller).</li>
            <li><code>POST /api/users/signin</code>: Login a user and get a JWT token.</li>
        </ul>

        <h3>Products</h3>
        <ul>
            <li><code>GET /api/products</code>: Get a list of all products. <span class="badge badge-done">Done</span></li>
            <li><code>POST /api/products</code>: Add a new product. <span class="badge badge-done">Done</span></li>
            <li><code>GET /api/products/:id</code>: Get details of a single product. <span class="badge badge-done">Done</span></li>
            <li><code>GET /api/products/filter</code>: Filter products based on criteria. <span class="badge badge-done">Done</span></li>
            <li><code>POST /api/products/rate</code>: Rate a product. <span class="badge badge-pending">Pending</span></li>
        </ul>

        <h3>Cart</h3>
        <ul>
            <li><code>POST /api/cartItems</code>: Add items to the cart. <span class="badge badge-done">Done</span></li>
            <li><code>GET /api/cartItems</code>: Get items from the cart. <span class="badge badge-done">Done</span></li>
            <li><code>DELETE /api/cartItems/:id</code>: Remove an item from the cart. <span class="badge badge-done">Done</span></li>
        </ul>
    </div>

    <div class="section">
        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Node.js</strong>: JavaScript runtime environment.</li>
            <li><strong>Express</strong>: Web framework for Node.js.</li>
            <li><strong>MongoDB</strong>: NoSQL database.</li>
            <li><strong>jsonwebtoken</strong>: For generating and verifying JSON Web Tokens.</li>
            <li><strong>bcrypt</strong>: For password hashing.</li>
            <li><strong>swagger-ui-express</strong>: For API documentation.</li>
            <li><strong>cors</strong>: For enabling Cross-Origin Resource Sharing.</li>
            <li><strong>multer</strong>: For handling file uploads.</li>
        </ul>
    </div>

    <div class="section">
        <h2>Setup and Installation</h2>
        <p>To get a local copy up and running, follow these simple steps.</p>

        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js installed on your machine.</li>
            <li>MongoDB installed and running.</li>
        </ul>

        <h3>Installation</h3>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/your_username/e-com-api.git</code></pre>
            </li>
            <li>Navigate to the project directory:
                <pre><code>cd e-com-api</code></pre>
            </li>
            <li>Install the dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>
                <p>Create a <code>.env</code> file in the root directory and add your MongoDB connection string:</p>
                <pre><code>MONGODB_URL=your_mongodb_connection_string</code></pre>
            </li>
            <li>Start the server:
                <pre><code>npm start</code></pre>
            </li>
        </ol>
        <p>The server will start on port 3200. You can access the API at <code>http://localhost:3200</code> and the API documentation at <code>http://localhost:3200/api-docs</code>.</p>
    </div>

</body>
</html>
