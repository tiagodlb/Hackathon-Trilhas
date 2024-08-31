import cors from 'cors'
import express, { json } from 'express'

const app = express()
app.use(json())
app.use(cors())
export default app
