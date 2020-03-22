import members from './members'
import express, {
    Application,
    Request,
    Response
} from 'express'

const app: Application = express()
const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => res.send(`<h1>go to /api/members</h1>`))
app.get('/api/members', (req: Request, res: Response) => res.json(members))

app.get('/api/users', (req: Request, res: Response) => res.json([
    {name: 'Mikel'}
]))

app.listen(port, () => console.log(`server started on ${port}`))
