import express from 'express';
const server = express()

import cors from 'cors'

const port = 3333

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  server.use(cors())

  // Ignore favicon.ico request
  if (request.originalUrl.includes('favicon.ico')) {
    response.status(204).end()
  }

  next()
})

import { GetAllUsers } from '@routes/GetAllUsers'
import { GetUser } from '@routes/GetUser'
import { CreateUser } from '@routes/CreateUser'
import { EditUser } from '@routes/EditUser'
import { DeleteUser } from '@routes/DeleteUser'

server.get('/', GetAllUsers)
server.get('/:id', GetUser)
server.post('/', CreateUser)
server.put('/:id', EditUser)
server.delete('/:id', DeleteUser)

server.listen(port)