import express from 'express'
const application = express()

import cors from 'cors'

application.use(express.urlencoded({ extended: true }))
application.use(express.json())

application.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  application.use(cors())

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

application.get('/', GetAllUsers)
application.get('/:id', GetUser)
application.post('/', CreateUser)
application.put('/:id', EditUser)
application.delete('/:id', DeleteUser)

export { application }