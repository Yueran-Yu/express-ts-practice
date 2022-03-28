import {NextFunction} from "express";

export const getBookHandler = (req: Request, res: Response, next: NextFunction) => {
	//@ts-ignore
	console.log(req.name)
	//@ts-ignore
	res.send(req.name)
	next()
}