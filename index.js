const express = require('express')
const app = express()
const { createServer } = require('http')
// const httpServer = createServer(app)
const cors = require('cors')
const bodyParser =require('body-parser')
app.use(cors())




const userRoute = require('./routes/userRoute')
const companyRoute = require('./routes/companyRoute')
require('dotenv').config()
app.use(express.json())
const dbConfig = require('./config/dbConfig')

app.use('/', userRoute)
app.use('/companies',companyRoute)




const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`node server started @ ${port}`))