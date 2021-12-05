import { db } from '@database/CreateTable'

const GetAllUsers = (request, response) => {
  db.then(async db => {
    const users = await db.all('SELECT * FROM users')
    return response.status(200).send(users)
  })
}

export { GetAllUsers }