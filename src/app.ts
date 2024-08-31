import cors from 'cors'
import express, { json } from 'express'

const app = express()
app.use(json())
app.use(cors())

app.get('/', (_req, res, next) => {
  try {
    return res.send({ message: 'hello' })
  } catch (error) {
    return next(error)
  }
})

export default app
