import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "F@bio2004",
  database: "pi2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
