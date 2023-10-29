const express = require('express')
const app = express()
const { createServer } = require('http')
// const httpServer = createServer(app)
const cors = require('cors')
const bodyParser =require('body-parser')
app.use(cors())



const domesticRoute = require('./routes/domesticRoute')
const userRoute = require('./routes/userRoute')
const companyRoute = require('./routes/companyRoute')
const familyRoute = require('./routes/familyRoute')
require('dotenv').config()
app.use(express.json())
const dbConfig = require('./config/dbConfig')

app.use('/users', userRoute)
app.use('/domestic',domesticRoute)
app.use('/companies',companyRoute)
app.use('/familys',familyRoute)




const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`node server started @ ${port}`))