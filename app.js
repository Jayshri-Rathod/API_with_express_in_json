const express = require('express')
const bodyParser = require('body-parser')
const courseRoutes = require('./routes/user.js')
const app = express()
const port = process.env.PORT || 6000;

app.use(bodyParser.json())
app.use('/course',courseRoutes)
 
app.listen(port,()=> {console.log(`server listening port: http://localhost:${port}`)})