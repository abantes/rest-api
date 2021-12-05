import { db } from '@database/CreateTable'

const DeleteUser = (request, response) => {
  const { id } = request.params
  
  db.then(async db => {
    await db.run(`DELETE FROM users WHERE id = ${id}`)

    return response.status(200).send()
  })
}

export { DeleteUser }