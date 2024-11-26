import express from "express"
import productcontroller from "../controllers/productController"
import { ROUTES } from "../constant/routes.constant"
const productrouter = express.Router()

productrouter.get(ROUTES.PING, productcontroller.hello)
export default productrouter
