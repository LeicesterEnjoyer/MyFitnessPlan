import express from "express"
import { getUsers, getUserByID, createUser, updateUser, deleteUserByID } from "../controllers/userController.js"


const router = express.Router()

router.get("/", async (req, res) => {
    const users = await getUsers()
    res.status(200).send(users)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUserByID(id)

    if (!user)
        return res.status(404).send({ message: "Invalid id!" })
    res.status(200).send(user)
})

router.post("/", async (req, res) => {
    const { name, email, phone } = req.body
    const user = await createUser(name, email, phone)

    if (!user)
        return res.status(400).send({ message: "Cannot create user!" })
    res.status(200).send(user)
})

router.put("/id/:id", async (req, res) => {
    const id = req.params.id
    const { name, email, phone } = req.body

    if (!await getUserByID(id))
        return res.status(404).send({ message: "Cannot find user!" })

    const result = await updateUser(id, name, email, phone)
    res.status(200).send(result)
})

router.delete("/id/:id", async (req, res) => {
    const id = req.params.id

    if (!await getUserByID(id))
        return res.status(404).send({ message: "Cannot find user!" })

    const result = await deleteUserByID(id)
    res.status(200).send(result)
})

export default router