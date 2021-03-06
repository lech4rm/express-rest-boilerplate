import 'dotenv/config'
import express from 'express'
import middlewares from './middlewares'
const app = express()

app.enable('trust proxy')

middlewares(app)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`)
})

process.on('SIGINT', () => {
  process.exit(1)
})

export default app
