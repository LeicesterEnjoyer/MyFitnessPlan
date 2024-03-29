import express from "express"
import userRouter from "./src/routers/userRouter.js"
import exerciseRouter from "./src/routers/exerciseRouter.js"
import workoutRouter from "./src/routers/workoutRouter.js"


const app = express()
const PORT = 3200

app.use(express.json())
app.use("/users", userRouter)
app.use("/exercises", exerciseRouter)
app.use("/workouts", workoutRouter)

app.listen(PORT, () => {
    console.log(`Server working on Port:${PORT}`)
})