import dotenv from 'dotenv';
import {Request, Response} from 'express';
dotenv.config();


const usercontroller = {
    hello: async(req: Request, res: Response)=>{
        res.status(200).send({
            status: "success",
            message: "hello!"
        })
    }
}
export default usercontroller;