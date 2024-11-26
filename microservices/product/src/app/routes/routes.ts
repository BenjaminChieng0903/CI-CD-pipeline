import express from "express"
import productrouter from "./productRouter"
const router = express.Router()

router.use("/product", productrouter)
export default router
