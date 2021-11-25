const db = require('../database/CreateTable')

module.exports = {
  getAllUsers(request, response) {
    db.then(async db => {
      const users = await db.all('SELECT * FROM users')
      return response.status(200).send(users)
    })
  }
}