import mysql from "mysql"

export const db=mysql.createConnection ({
    host:"localhost",
    user:"Neranjana",
    password:"Nera123",
    database:"blog"
})