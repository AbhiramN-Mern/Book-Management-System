
# Book Management System 

This is a simple CRUD application for managing books, built using TypeScript, Node.js, Express, MongoDB, and EJS.
The project is written entirely in TypeScript and compiled to JavaScript before execution.

---

## Features

### CRUD operations

* Add new books
* Edit existing books
* Delete books
* View all books

### Technologies used

* TypeScript (compiled to JavaScript)
* Node.js and Express
* MongoDB with Mongoose
* EJS for server-side rendering

### Project structure

* Controllers
* Models
* Routes
* Views
* TypeScript build system

---

## TypeScript (TS) to JavaScript (JS) Conversion

The application is developed in TypeScript, and the code is compiled into JavaScript before running it with Node.js.

### Build command (TS → JS)

```sh
npm run build
```

This will generate the compiled JavaScript files inside the `dist/` directory.

### Run the compiled JavaScript

```sh
node dist/app.js
```

---

## Folder Structure

```
Book-Management-System/
│── dist/                # Compiled JavaScript output
│── src/
│   ├── controllers/     # Application logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Route definitions
│   ├── views/           # EJS templates
│   └── app.ts           # Main TypeScript entry file
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```sh
git clone https://github.com/AbhiramN-Mern/Book-Management-System.git
cd Book-Management-System
```

### 2. Install dependencies

```sh
npm install
```

### 3. Create environment file

Create a `.env` file in the project root:

```
MONGO_URI=your_mongodb_connection_string
PORT=5555
```

### 4. Build the project (TypeScript → JavaScript)

```sh
npm run build
```

### 5. Start the server

```sh
node dist/app.js
```


