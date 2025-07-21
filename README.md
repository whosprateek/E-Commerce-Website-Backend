<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce API - Readme</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            color: #24292e;
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            border-bottom: 2px solid #eaecef;
            padding-bottom: .3em;
            color: #2c3e50;
        }
        pre {
            background: #f6f8fa;
            padding: 16px;
            border-radius: 5px;
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 85%;
            background-color: rgba(27,31,35,.05);
            border-radius: 3px;
            padding: 0.2em 0.4em;
        }
        pre > code {
            font-size: 100%;
            padding: 0;
            background-color: transparent;
            border: 0;
        }
        .section {
            margin-bottom: 2em;
        }
        .badge {
            display: inline-block;
            padding: 0.3em 0.6em;
            font-size: 80%;
            font-weight: 600;
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
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 0.5em;
        }
    </style>
</head>
<body>
    <h1>E-commerce API</h1>
=
    <div class="section">
        <h2>📜 Introduction</h2>
        <p>
            This is the backend API for a comprehensive E-commerce application. It handles all server-side logic, including product management, user authentication, and shopping cart operations. [cite_start]The API is built with a modern JavaScript stack, featuring Node.js and Express, and it leverages MongoDB for data persistence. [cite: 5, 8]
        </p>
        <p>
            [cite_start]Key functionalities include secure endpoints via JWT, middleware for logging requests, CORS configuration for accommodating client applications, and detailed API documentation through Swagger. [cite: 5]
        </p>
    </div>
=
    <hr>
    <div class="section">
        <h2>✨ Features</h2>
        <ul>
            [cite_start]<li><strong>User Authentication:</strong> Secure user signup and signin functionalities using JWT (JSON Web Tokens) for authenticating subsequent requests. [cite: 5, 8]</li>
            <li><strong>Product Management:</strong> Complete CRUD operations for products, allowing sellers to manage their inventory. [cite_start]Users can also filter and rate products. [cite: 6]</li>
            [cite_start]<li><strong>Shopping Cart:</strong> Functionality for users to add, view, and remove items from their shopping cart. [cite: 7]</li>
            [cite_start]<li><strong>API Security:</strong> Endpoints for products and cart items are protected and can only be accessed with a valid JWT. [cite: 5]</li>
            [cite_start]<li><strong>API Documentation:</strong> Interactive API documentation is available through Swagger UI at the <code>/api-docs</code> endpoint. [cite: 5]</li>
            [cite_start]<li><strong>Logging:</strong> A logger middleware is implemented to record all incoming requests with their payloads, which is useful for debugging and monitoring. [cite: 4, 5]</li>
            [cite_start]<li><strong>Error Handling:</strong> A centralized error handling mechanism is in place to manage application-specific and server errors gracefully. [cite: 5]</li>
            [cite_start]<li><strong>CORS:</strong> Cross-Origin Resource Sharing (CORS) is enabled to allow requests from specified origins. [cite: 5]</li>
        </ul>
    </div>

   <hr>
    <div class="section">
        <h2>🔌 API Endpoints</h2>
        <p>
            The following is a summary of the available API endpoints. For detailed information on request bodies and responses, please refer to the <a href="http://localhost:3200/api-docs">Swagger Documentation</a>.
        </p>
    [cite_start]<h3>Users API [cite: 1, 8]</h3>
        <ul>
            [cite_start]<li><code>POST /api/users/signin</code>: Authenticates a user and returns a JWT token upon successful login. [cite: 1]</li>
            [cite_start]<li><code>POST /api/users/signup</code>: Registers a new user with the platform. [cite: 4]</li>
        </ul>
        [cite_start]<h3>Products API [cite: 1, 6]</h3>
        <ul>
            <li><code>GET /api/products</code>: Retrieves a list of all available products. [cite_start]<span class="badge badge-done">Done</span> [cite: 1, 6]</li>
            <li><code>POST /api/products</code>: Adds a new product (requires authentication). [cite_start]<span class="badge badge-done">Done</span> [cite: 6]</li>
            <li><code>GET /api/products/filter</code>: Filters products based on query parameters. [cite_start]<span class="badge badge-done">Done</span> [cite: 6]</li>
            <li><code>POST /api/products/rate</code>: Allows authenticated users to rate a product. [cite_start]<span class="badge badge-done">Done</span> [cite: 6]</li>
            <li><code>GET /api/products/:id</code>: Fetches a single product by its ID. [cite_start]<span class="badge badge-done">Done</span> [cite: 6]</li>
        </ul>
        [cite_start]<h3>Cart Items API [cite: 7]</h3>
        <ul>
            <li><code>GET /api/cartItems</code>: Retrieves all items in the user's cart (requires authentication). [cite_start]<span class="badge badge-done">Done</span> [cite: 7]</li>
            <li><code>POST /api/cartItems</code>: Adds an item to the user's cart (requires authentication). [cite_start]<span class="badge badge-done">Done</span> [cite: 7]</li>
            <li><code>DELETE /api/cartItems/:id</code>: Removes a specific item from the cart (requires authentication). [cite_start]<span class="badge badge-done">Done</span> [cite: 7]</li>
        </ul>
    </div>
    <hr>
    <div class="section">
        <h2>🛠️ Technologies & Dependencies</h2>
        <p>The application is built using the following technologies and libraries:</p>
        <ul>
            [cite_start]<li><strong>Node.js & Express.js:</strong> For the server-side environment and framework. [cite: 2, 3]</li>
            [cite_start]<li><strong>MongoDB:</strong> As the NoSQL database for storing application data. [cite: 2, 3]</li>
            [cite_start]<li><strong>bcrypt:</strong> For hashing user passwords before storing them. [cite: 2, 3]</li>
            [cite_start]<li><strong>jsonwebtoken:</strong> For implementing JWT-based authentication. [cite: 2, 3]</li>
            [cite_start]<li><strong>swagger-ui-express:</strong> To provide interactive API documentation. [cite: 2, 3]</li>
            [cite_start]<li><strong>cors:</strong> To enable and configure Cross-Origin Resource Sharing. [cite: 2, 3]</li>
            [cite_start]<li><strong>multer:</strong> Middleware for handling <code>multipart/form-data</code>, used for file uploads. [cite: 2, 3]</li>
        </ul>
    </div>
    <hr>
    <div class="section">
        <h2>🚀 Getting Started</h2>
        <p>To get a local copy up and running, please follow these steps.</p>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v18 or higher recommended)</li>
            <li>npm (Node Package Manager)</li>
            <li>MongoDB instance (local or cloud)</li>
        </ul>
        <h3>Installation & Setup</h3>
        <ol>
            <li><strong>Clone the repository</strong>
                <pre><code>git clone &lt;your-repository-url&gt;</code></pre>
            </li>
            <li><strong>Navigate to the project directory</strong>
                <pre><code>cd e-com-api</code></pre>
            </li>
            <li><strong>Install dependencies</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Configure Environment Variables</strong><br>
                You may need to set up a <code>.env</code> file for your MongoDB connection string and other secrets. [cite_start]The server connects to MongoDB upon starting. [cite: 5]
            </li>
            <li><strong>Start the server</strong>
                <pre><code>npm start</code></pre>
                <p>
                    [cite_start]The server will start on port 3200. You can access the API at <code>http://localhost:3200</code>. [cite: 5]
                </p>
            </li>
        </ol>
    </div>

</body>
</html>
