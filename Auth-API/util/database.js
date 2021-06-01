const mysql = require("promise-mysql");

// [START cloud_sql_mysql_mysql_create_tcp]
const createTcpPool = async (config) => {
  // Extract host and port from socket address
  const dbSocketAddr = process.env.DB_HOST.split(":");

  // Establish a connection to the database
  return await mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: dbSocketAddr[0],
    port: dbSocketAddr[1],
    ...config,
  });
};

// [START cloud_sql_mysql_mysql_create_socket]
const createUnixSocketPool = async (config) => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";

  return await mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // If connecting via unix domain socket, specify the path
    socketPath: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
    ...config,
  });
};

const createPool = async () => {
  const config = {
    connectionLimit: 5,
    connectTimeout: 10000,
    acquireTimeout: 10000,
    waitForConnections: true,
    queueLimit: 0,
  };
  if (process.env.DB_HOST) {
    return await createTcpPool(config);
  } else {
    return await createUnixSocketPool(config);
  }
};

// const ensureSchema = async pool => {
//   // Wait for tables to be created (if they don't already exist).
//   await pool.query(
//     `CREATE TABLE IF NOT EXISTS users
//       ( id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL
//       password VARCHAR(255) NOT NULL, PRIMARY KEY (id) );`
//   );
//   console.log("Ensured that table 'votes' exists");
// };


module.exports = createPool;
