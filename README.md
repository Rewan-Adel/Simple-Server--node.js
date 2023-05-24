# Simple-Server--node.js
- A Simple Node.js/Express REST API implementation


# Usage
- Run ( npm install ) to installl dependencies 
- Run ( npm  start )  to start the local server
- Load http://localhost:3000 to test the endpoin 

# Routes
|      URL       |         Description                |             Needs                 |
| -------------- | ---------------------------------- | --------------------------------- |
| /api/login     | log into your account              | post method=>  email, password    |          
| /api/admin/:id | to update specific user into admin | put method                        |

# Crud Operations
| Method |      URL      |         Description          |     Authorization    |
| ------ | ------------- | ---------------------------- | -------------------- |
| POST   |/api/user      | Create a new user            |  Users               |
| patch  | /api/user/:id      | update data existing user    |  Users               |
| GET    | /api/user     | Get all Users                |  Only Admin          |
| GET    | /api/user/:id | Get specific  User         |  Only Admin          |
| DELETE | /api/user/id  | Delete an existing user      |  Only Admin          |


# Note
Create a new user needs:
- name
- email
- password (as a string)

Log in needs:
- email
- password

 Don't put spaces between key
