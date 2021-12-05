import { db } from '@database/CreateTable'

const CreateUser = (request, response) => {
  const { name, username } = request.body

  db.then(async db => {
    await db.all(`INSERT INTO users (name, username) VALUES (
      "${name}", "${username}"
    )`)

    return response.status(200).send()
  })
}

export { CreateUser }