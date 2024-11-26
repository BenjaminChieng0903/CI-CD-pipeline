// src/index.ts
import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import cors from "cors"
import routes from "./app/routes/routes"
dotenv.config()

const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Global log - Incoming request: ${req.method} ${req.originalUrl}`)
  next()
})

app.use(cors())

//user route entry
const BASE_PATH_V1 = process.env.BASE_PATH_V1 || "/v1/api"
app.use(BASE_PATH_V1, routes)

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
