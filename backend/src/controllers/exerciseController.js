import pool from "../database/db.js"


export async function getExercises() {
    const [result] = await pool.query("SELECT * FROM Exercise")
    return result
}

export async function getExerciseByID(id) {
    const [result] = await pool.query("SELECT * FROM Exercise WHERE id = ?", [id])
    return result[0]
}

export async function createExercise(name, reps, muscles_hit, user_id) {
    const result = await pool.query("INSERT INTO Exercise (name, reps, muscles_hit, user_id) VALUES (?, ?, ?, ?)", [name, reps, muscles_hit, user_id])
    return result
}

export async function updateExercise(id, name, reps, muscles_hit, user_id) {
    const result = await pool.query("UPDATE Exercise SET name = ?, reps = ?, muscles_hit = ?, user_id = ? WHERE id = ?", [name, reps, muscles_hit, user_id, id])
    return result
}

export async function deleteExerciseByID(id) {
    const result = await pool.query("DELETE FROM Exercise WHERE id = ?", [id])
    return result
}