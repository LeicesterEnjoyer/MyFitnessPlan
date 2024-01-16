import pool from "../database/db.js"


export async function getWorkouts() {
    const [result] = await pool.query("SELECT * FROM Workout")
    return result
}

export async function getWorkoutByID(id) {
    const [result] = await pool.query("SELECT * FROM Workout WHERE id = ?", [id])
    return result[0]
}

export async function createWorkout(name, user_id, exercise_id) {
    const result = await pool.query("INSERT INTO Workout (name, user_id, exercise_id) VALUES (?, ?, ?)", [name, user_id, exercise_id])
    return result
}

export async function updateWorkout(id, name, user_id, exercise_id) {
    const result = await pool.query("UPDATE Workout SET name = ?, user_id = ?, exercise_id = ? WHERE id = ?", [name, user_id, exercise_id, id])
    return result
}

export async function deleteWorkoutByID(id) {
    const result = await pool.query("DELETE FROM Workout WHERE id = ?", [id])
    return result
}