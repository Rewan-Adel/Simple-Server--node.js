# Simple-Server--node.js
- A Simple Node.js/Express REST API implementation
- Enable Admin to update users to be admin 

# Usage
- Run ( npm install ) to installl dependencies 
- Run ( npm  start )  to start the local server
- Load http://localhost:3000 to test the endpoin 

# Routes
|      URL       |         Description                |             Needs                 |
| -------------- | ---------------------------------- | --------------------------------- |
| /api/login     | log into your account              | post method=>  email, password    |          
| /api/admin/:id | to update specific user into admin | put method                        |
| /api/user      | doing Crud Operations              | Choose the  method                |

# Crud Operations
| Method |      URL      |         Description          |     Authorization    |
| ------ | ------------- | ---------------------------- | -------------------- |
| POST   | /             | Create a new user            |  Users               |
| GET    | /             | Get all Users                |  Only Admin          |
| GET    | /:id          | Get a specific  User         |  Only Admin          |
| DELETE | /:id          | Delete an existing user      |  Only Admin          |
| patch  | /:id          | update data existing user    |  Users               |

# Note
Create a new user needs:
- name
- email
- password (as a string)

Log in needs:
- email
- password
