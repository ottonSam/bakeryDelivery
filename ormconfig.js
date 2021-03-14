module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "extra": {
    "ssl": true
  },
  "entities": [
    "dist/app/models/*.js"
  ],
  "migrations": [
    "dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}