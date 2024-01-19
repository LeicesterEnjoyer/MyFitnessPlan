import express from "express"
import { getWorkouts, getWorkoutByID, createWorkout, updateWorkout, deleteWorkoutByID } from "../controllers/workoutController.js"

const router = express.Router();

router.get("/", async (req, res) => {
    const workouts = await getWorkouts()
    res.status(200).send(workouts)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const workout = await getWorkoutByID(id)

    if (!workout)
        return res.status(404).send({ message: "Invalid id!" })
    res.status(200).send(workout)
})

router.post("/", async (req, res) => {
    const { name, user_id, exercise_id } = req.body
    const workout = await createWorkout(name, user_id, exercise_id)

    if (!workout)
        return res.status(400).send({ message: "Cannot create workout!" })
    res.status(200).send(workout)
})

router.put("/id/:id", async (req, res) => {
    const id = req.params.id
    const { name, user_id, exercise_id } = req.body

    if (!await getWorkoutByID(id))
        return res.status(404).send({ message: "Cannot find workout!" })

    const result = await updateWorkout(id, name, user_id, exercise_id)
    res.status(200).send(result)
})

router.delete("/id/:id", async (req, res) => {
    const id = req.params.id

    if (!await getWorkoutByID(id))
        return res.status(404).send({ message: "Cannot find workout!" })

    const result = await deleteWorkoutByID(id)
    res.status(200).send(result)
})

export default router