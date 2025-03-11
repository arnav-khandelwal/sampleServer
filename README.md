# User Management API

A simple Node.js and Express-based API for managing users, with CRUD operations and MongoDB for data persistence.

## Features
- Fetch all users (`GET /api/user`)
- Fetch a single user by ID (`GET /api/user/:id`)
- Add a new user (`POST /api/user`)
- Update an existing user (`PATCH /api/user/:id`)
- Delete a user (`DELETE /api/user/:id`)

## Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the MongoDB server locally:
   ```sh
   mongod
   ```
4. Start the Node.js server:
   ```sh
   node index.js
   ```

## Database Connection
- The API connects to MongoDB using Mongoose.
- Connection URL: `mongodb://127.0.0.1:27017/MyFirstDB`

## Endpoints
### 1. Get All Users
- **Endpoint:** `GET /api/user`
- **Response:** JSON array of users

### 2. Get a Single User
- **Endpoint:** `GET /api/user/:id`
- **Response:** JSON object of the requested user

### 3. Add a New User
- **Endpoint:** `POST /api/user`
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "jobTitle": "Software Engineer",
    "gender": "Male"
  }
  ```
- **Response:** `{ status: "success", user: <new_user_object> }`

### 4. Update a User
- **Endpoint:** `PATCH /api/user/:id`
- **Request Body:** Fields to be updated
- **Response:** `{ status: "success", updatedUser: <updated_user> }`

### 5. Delete a User
- **Endpoint:** `DELETE /api/user/:id`
- **Response:** `{ status: "success", message: "User deleted" }`

## Additional Routes
- `GET /` - Returns a simple greeting message.

## Dependencies
- Express.js
- Mongoose (MongoDB ORM)
- Node.js

## License
This project is open-source and available under the MIT License.

