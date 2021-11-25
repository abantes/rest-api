const db = require('../database/CreateTable')

module.exports = {
  getUser(request, response) {
    const { id } = request.params

    db.then(async db => {
      const user = await db.all(`SELECT * FROM users WHERE id = ${id}`)
      return response.status(200).send(user)
    })
  }
}