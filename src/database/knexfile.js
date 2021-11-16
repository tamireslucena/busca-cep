/* eslint-disable node/no-path-concat */

module.exports = {
  client: 'pg',
  connection: {
    host: 'postgres',
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    directory: `${__dirname}/migrations`,
    tableName: 'migrations'
  }
}
