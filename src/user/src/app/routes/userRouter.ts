import express from "express";
import usercontroller from "../controllers/userController";
const userouter = express.Router();


userouter.get('/hello', usercontroller.hello);
export default userouter;