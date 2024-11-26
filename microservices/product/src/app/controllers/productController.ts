import dotenv from "dotenv"
import { Request, Response } from "express"
import { StringConstant } from "../constant/string"
import { httpStatusCodes } from "../constant/httpStatusCode"
dotenv.config()

const productcontroller = {
  hello: async (req: Request, res: Response) => {
    //status code, message need to be standardized
    res.status(200).send({
      status: httpStatusCodes.OK,
      message: StringConstant.HELLO_PING
    })
  }
}
export default productcontroller
