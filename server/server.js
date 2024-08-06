import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './utils/db.js'
import userRoutes from './router/user.router.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config({ path: './utils/config.env' })

const app = express()
app.use(cors({
    origin: 'https://auth-stuff-zeta.vercel.app',
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

dbConnection()

app.get('/', (req, res) => {
    res.send({ message: "here it is down to" })
})

app.use('/api/v1', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is runing on port ${process.env.PORT}`);
})
