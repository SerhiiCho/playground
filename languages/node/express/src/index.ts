import routes from './routes'
import express, { Application } from 'express'

const app: Application = express()
const port = process.env.PORT || 4000

routes(app)

app.listen(port, () => console.log(`server started on ${port}`))