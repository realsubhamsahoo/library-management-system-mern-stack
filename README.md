# Library Management System in MERN Stack

- Welcome to the Library Management System Backend Project!
- This backend is designed to manage books, authors, borrowers, and transactions in a library. 
- I've learnt backend so currently NodeJS, ExpressJS and MongoDB have been used.
- The Frontend is on a Hold and I'll build it later as I learn.
- The repo is open for collaborations and contributions.
- If you know React, you can try building the frontend for the project.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, update, and delete books, authors, and borrowers.
- Check out and return books, tracking transaction details.
- Search for books by title, author, or genre.
- User authentication system to control access.
- MERN stack implementation (MongoDB, Express.js, React, Node.js).
- Open for collaborations and contributions.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/library-management-system.git
   ```

2. Change into the project directory:

   ```bash
   cd library-management-system
   Install dependencies:
   ```

   ```bash
   npm install
   Set up environment variables:
   ```

3. Create a .env file in the project root and add the following:

   ```env
   JWT_SECRET=your_secure_jwt_secret_key
   MONGODB_URI=mongodb://localhost/library
   PORT=3000
   ```
Replace your_secure_jwt_secret_key with a secure key for JWT.

4. Start the application:

   ```bash
   npm start
   ```

 ## Usage

- Access the application at http://localhost:3000 in your browser.
- Use Postman or other API testing tools to interact with the API endpoints.

## API Endpoints
### Authors:

- POST /api/authors: Create a new author.
- GET /api/authors: Get all authors.
- PUT /api/authors/:id: Update an author.
- DELETE /api/authors/:id: Delete an author.

### Books:

- POST /api/books: Create a new book.
- GET /api/books: Get all books.
- PUT /api/books/:id: Update a book.
- DELETE /api/books/:id: Delete a book.
- GET /api/books/search?q=query: Search for books by title, author, or genre.

### Borrowers:
- POST /api/borrowers: Create a new borrower.
- GET /api/borrowers: Get all borrowers.
- PUT /api/borrowers/:id: Update a borrower.
- DELETE /api/borrowers/:id: Delete a borrower.

### Transactions:
- POST /api/transactions/check-out: Check out a book.
- POST /api/transactions/return: Return a book.

## Testing
Use Postman or other API testing tools to perform tests on the API endpoints. 

## Contributing
Contributions are welcome! Feel free to open issues, submit pull requests, or provide suggestions to improve the project.

## License
This project is licensed under the [GNU General Public License v3.0](LICENSE).

```bash
Make sure to replace placeholders (e.g., `your-username`, `your_secure_jwt_secret_key`, etc.) with the appropriate values for your project.```
