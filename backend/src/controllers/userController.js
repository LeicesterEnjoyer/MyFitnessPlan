import pool from "../database/db.js"


export async function getUsers() {
    const [result] = await pool.query("SELECT * FROM User")
    return result
}

export async function getUserByID(id) {
    const [result] = await pool.query("SELECT * FROM User WHERE id = ?", [id])
    return result[0]
}

export async function createUser(name, email, phone) {
    const result = await pool.query("INSERT INTO User (name, email, phone) VALUES (?, ?, ?)", [name, email, phone])
    return result
}

export async function updateUser(id, name, email, phone) {
    const result = await pool.query("UPDATE User SET name = ?, email = ?, phone = ? WHERE id = ?", [name, email, phone, id])
    return result
}

export async function deleteUserByID(id) {
    const result = await pool.query("DELETE FROM User WHERE id = ?", [id])
    return result
}