# Simple-Server--node.js
# A Simple Node.js/Express REST API implementation
# Enable Admin to update users to be admin 

# Usage
- Run ( npm install ) to installl dependencies 
- Run ( npm  start )  to start the local server
- Load http://localhost:3000 to test the endpoin 

# Routes
|    URL       |         Description                |             Needs                 |
| ------------ | ---------------------------------- | --------------------------------- |
| /api/login   | log into your account              | post method=>  email, password    |          
| /api/admin   | to update specific user into admin | put method => id of specific user |
| /api/user    | doing Crud Operations              | Choose the  method                |

# Crud Operations
| Method |      URL      |         Description          |     Authorization    |
| ------ | ------------- | ---------------------------- | -------------------- |
| GET    | /api/user/    | Get all Users                |  Only Admin          |
| GET    | /user/:id     | Get a specific  User         |  Only Admin          |
| DELETE | /user/:id     | Delete an existing user      |  Only Admin          |
| POST   | /user/        | Create a new user            |  Users               |
| patch  | /user/:id     | update data existing user    |  Users               |

# Note
Create a new user needs 
- name
- email
- password 
