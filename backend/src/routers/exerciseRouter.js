import express from "express";
import { getExercises, getExerciseByID, createExercise, updateExercise, deleteExerciseByID } from "../controllers/exerciseController.js";


const router = express.Router();

router.get("/", async (req, res) => {
    const exercises = await getExercises()
    res.status(200).send(exercises)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const exercise = await getExerciseByID(id)

    if (!exercise)
        return res.status(404).send({ message: "Invalid id!" })
    res.status(200).send(exercise)
})

router.post("/", async (req, res) => {
    const { name, reps, muscles_hit, user_id } = req.body
    const exercise = await createExercise(name, reps, muscles_hit, user_id)

    if (!exercise)
        return res.status(400).send({ message: "Cannot create exercise!" })
    res.status(200).send(exercise)
})

router.put("/id/:id", async (req, res) => {
    const id = req.params.id
    const { name, reps, muscles_hit, user_id } = req.body

    if (!await getExerciseByID(id))
        return res.status(404).send({ message: "Cannot find exercise!" })

    const result = await updateExercise(id, name, reps, muscles_hit, user_id)
    res.status(200).send(result)
})

router.delete("/id/:id", async (req, res) => {
    const id = req.params.id

    if (!await getExerciseByID(id))
        return res.status(404).send({ message: "Cannot find exercise!" })

    const result = await deleteExerciseByID(id)
    res.status(200).send(result)
})

export default router