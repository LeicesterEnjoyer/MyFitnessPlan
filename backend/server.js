import express from "express"
import userRouter from "./src/routers/userRouter.js"


const app = express()
const PORT = 3200

app.use(express.json())
app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server working on Port:${PORT}`)
})