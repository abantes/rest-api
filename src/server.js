require('dotenv').config()
const port = process.env.PORT || 3333

const express = require('express')
const server = express()

const cors = require('cors')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  server.use(cors())
  next()
})

const GetAllUsers = require('./routes/GetAllUsers')
const GetUser = require('./routes/GetUser')
const CreateUser = require('./routes/CreateUser')
const EditUser = require('./routes/EditUser')
const DeleteUser = require('./routes/DeleteUser')

server.get('/', GetAllUsers.getAllUsers)
server.get('/:id', GetUser.getUser)
server.post('/', CreateUser.createUser)
server.put('/:id', EditUser.editUser)
server.delete('/:id', DeleteUser.deleteUser)

server.listen(port, error => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on http://localhost:${port}`
  
  return console.log(message)
})