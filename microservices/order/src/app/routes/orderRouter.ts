import express from "express"
import ordercontroller from "../controllers/orderController"
import { ROUTES } from "../constant/routes.constant"
const orderrouter = express.Router()

orderrouter.get(ROUTES.PING, ordercontroller.hello)
export default orderrouter
