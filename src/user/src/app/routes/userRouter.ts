import express from "express";
import usercontroller from "../controllers/userController";
import { ROUTES } from "./../constant/routes.constant";
const userouter = express.Router();

userouter.get(ROUTES.PING, usercontroller.hello);
export default userouter;
