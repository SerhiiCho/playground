import express, {
    Application,
    Request,
    Response
} from 'express'
import members from './members'

export default (app: Application) => {
    app.get('/', (req: Request, res: Response) => res.send(`<h1>go to /api/members</h1>`))
    app.get('/api/members', (req: Request, res: Response) => res.json(members))
}