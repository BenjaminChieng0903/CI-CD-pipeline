import express from "express";
import userouter from "./userRouter";
const router = express.Router();


router.use('/users', userouter);
export default router;

