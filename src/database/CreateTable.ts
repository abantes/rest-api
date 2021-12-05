import Database from 'sqlite-async'

function execute (db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      username TEXT
    );
  `)
}

const db = Database.open(`${__dirname}/database.sqlite`).then(execute)

export { db }