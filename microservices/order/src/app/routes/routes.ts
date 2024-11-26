import express from "express"
import orderrouter from "./orderRouter"
const router = express.Router()

router.use("/order", orderrouter)
export default router
