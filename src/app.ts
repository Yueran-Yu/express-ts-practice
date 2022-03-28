import express, {NextFunction, Request, Response} from 'express';

const app = express()

app.use(express.json())

const middleware = ({name}:{name:string})=>
	(req: Request, res: Response, next: NextFunction) => {
	// @ts-ignore
	req.name = name
	// @ts-ignore
	req.quantity = 'gtht'
	next()
}

// const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
// 	console.log("second handler")
// 	return res.send(req.params)
// }

app.use(middleware({name: 'Tom Roma'}))

app.get("/api/books/:bookId",
	(req: Request, res: Response, next: NextFunction) => {
		// @ts-ignore
		console.log(req.name)
		// @ts-ignore
		res.send(req.quantity)
	})


// app.get("/api/books/:bookId",
// 	middleware,
// 	(req: Request, res: Response, next: NextFunction) => {
// 		// @ts-ignore
// 		console.log(req.name)
// 		// @ts-ignore
// 		res.send(req.quantity)
// 	})
//

// app.get("/health", (req: Request, res: Response) => res.sendStatus(200))
// app.get("ab*cd", (req: Request, res: Response) => res.send("/ab*cd"))
// app.get(/abc/, (req: Request, res: Response) => res.send("abc"))


// app.route('/')
// 	.get((req: Request, res:Response)=>{
// 		return res.send('You make a GET request')
// 	})
// 	.post((req: Request, res:Response)=>{
// 		return res.send('You make a POST request')
// 	})
// 	.put((req: Request, res:Response)=>{
// 		return res.send('You make a PUT request')
// 	})
// 	.all((req: Request, res:Response)=>{
// 		return res.send('You make a ALL request')
// 	})

// app.get("/",(req:Request, res:Response) => {
// 	return res.json({
// 		success:true,
// 		name:'TomDoesTech'
// 	})
// })
//


// app.post("/api/da", (req:Request, res:Response)=>{
// 	console.log(req.body)
//
// 	return res.sendStatus(200)
// })
//
// app.all('/api/all', (req:Request, res:Response)=>{
// 	return res.sendStatus(200)
// })

app.get('/error', ()=>{
	throw new Error('Boom!')
})
app.listen(3000, () => {
	console.log("Application listening at http://localhost:3000")
})