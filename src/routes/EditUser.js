const db = require('../database/CreateTable')

module.exports = {
  editUser(request, response) {
    const { name, username } = request.body
    const { id } = request.params
    
    db.then(async db => {

      if (name != undefined) {
        await db.all(`
          UPDATE users SET name = "${name}" WHERE id = ${id}`
        )
      }

      if (username != undefined) {
        await db.all(`
          UPDATE users SET username = "${username}" WHERE id = ${id}`
        )
      }

      return response.status(200).send()
    })
  }
}