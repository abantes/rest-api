const db = require('../database/CreateTable')

module.exports = {
  createUser(request, response) {
    const { name, username } = request.body

    db.then(async db => {
      await db.all(`INSERT INTO users (name, username) VALUES (
        "${name}", "${username}"
      )`)

      return response.status(200).send()
    })
  }
}