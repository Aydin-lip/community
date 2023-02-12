import mysql from 'mysql2/promise'

const SqlConnection = async (): Promise<mysql.Connection> => {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "app_db",
    user: "aydin_mysql",
    password: "mysql"
  })
  return connection
}

export default SqlConnection;