# User Management API

A simple Node.js and Express-based API for managing users, with CRUD operations and data persistence using a JSON file.

## Features
- Fetch all users (`GET /api/users`)
- Fetch a single user by ID (`GET /api/users/:id`)
- Add a new user (`POST /api/users`)
- Update an existing user (`PATCH /api/users/:id`)
- Delete a user (`DELETE /api/users/:id`)

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
3. Start the server:
   ```sh
   node index.js
   ```

## Endpoints
### 1. Get All Users
- **Endpoint:** `GET /api/users`
- **Response:** JSON array of users

### 2. Get a Single User
- **Endpoint:** `GET /api/users/:id`
- **Response:** JSON object of the requested user

### 3. Add a New User
- **Endpoint:** `POST /api/users`
- **Request Body:**
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Response:** `{ status: "success", id: <new_id> }`

### 4. Update a User
- **Endpoint:** `PATCH /api/users/:id`
- **Request Body:** Fields to be updated
- **Response:** `{ status: "success", newBody: <updated_user> }`

### 5. Delete a User
- **Endpoint:** `DELETE /api/users/:id`
- **Response:** `{ status: "success", remaining: <number_of_users_left> }`

## Additional Routes
- `GET /users` - Returns an HTML list of all users.
- `GET /` - Returns a simple greeting message.

## Dependencies
- Express.js
- Node.js
- File System (`fs`)

## License
This project is open-source and available under the MIT License.

