# Login & Signup Web App

A simple full-stack web application that allows users to sign up, log in, and manage user data using MongoDB, Express, and plain HTML/CSS/JS.

## Features

- User registration (signup)
- User login
- REST API for Create, Read, Update, Delete (CRUD) operations on users
- MongoDB database integration
- Responsive and minimal UI

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)

## Folder Structure

- project/ │ ├── index.html # Main HTML file ├── styles.css # Styling for the frontend ├── scripts.js # Frontend logic (form handling) ├── server.js # Express backend └── README.md # This file


## Getting Started

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/yourusername/login-signup-app.git](https://github.com/yourusername/login-signup-app.git)
    cd login-signup-app
    ```

2.  **Install Dependencies**

    Make sure you have Node.js and MongoDB installed on your system.

    ```bash
    npm install
    ```

3.  **Start MongoDB**

    Start your MongoDB server. By default, it usually runs on `mongodb://localhost:27017`. Ensure your MongoDB service is running.

4.  **Run the Server**

    ```bash
    node server.js
    ```

    The server will start and listen for incoming requests. You might see a message in your terminal indicating the server is running.

5.  **Open in Browser**

    Open the `index.html` file in your web browser. Alternatively, you can serve the `index.html` file and other static assets using a simple static server.

    You can use Live Server (a popular VS Code extension) or any other static server. For example, using `npx serve`:

    ```bash
    npx serve .
    ```

    Then, navigate to the address provided by the static server (usually `http://localhost:3000` or similar).

## API Endpoints

The backend provides the following REST API endpoints:

-   `POST /signup`: Create a new user. Expects a JSON body with `username` and `password`.
-   `POST /login`: Login an existing user. Expects a JSON body with `username` and `password`.
-   `GET /users`: Get a list of all users.
-   `GET /users/:id`: Get details of a single user by their ID. Replace `:id` with the actual user ID.
-   `PUT /users/:id`: Update an existing user's information. Expects a JSON body with the fields to update and the user ID in the URL.
-   `DELETE /users/:id`: Delete a user by their ID. Replace `:id` with the actual user ID.

## Notes

**Important Security Considerations:**

-   **Password Security:** Passwords are currently stored as **plain text**. **This is highly insecure and should NEVER be done in a production environment.** For real-world applications, always hash passwords using a strong hashing algorithm like bcrypt before storing them in the database.
-   **Authentication:** This is a minimal educational example and **does not implement proper session management or token-based authentication.** In a production application, you would need to implement secure authentication mechanisms to manage user sessions and protect API endpoints.

This application serves as a basic foundation for understanding user authentication and CRUD operations. Remember to implement security best practices for any production-ready application.
