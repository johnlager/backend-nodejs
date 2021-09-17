import * as bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import "reflect-metadata"
import "../../container"
import createConnection from "../../infra/typeorm/index"
import { router } from './routes/index'
// create connection from typeorm

createConnection()

dotenv.config()

const application = express()

application.use(bodyParser.text())
application.use(express.json())
application.use(express.urlencoded({ extended: false }))
application.use(cors())

application.get('/', (req, res) => {
    res.send('Hello World!')
})

application.use(router)

application.set('port', process.env.APP_PORT || 3000)

export { application }
