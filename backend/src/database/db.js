import mysql from "mysql2"


const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    port: 3306,
    password: "password",
    database: "my_fitness_plan_db"
}).promise()

export default pool