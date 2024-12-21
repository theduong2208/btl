const express = require('express')
const dotenv  = require('dotenv')
const mongoose = require('mongoose')
const webRoutes = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config()


const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
webRoutes(app)

;
// console.log(">>check Mongo_db:" , process.env.MONGO_DB)
mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db Success')
    })
    .catch((err) =>{
        console.log('err')
    })

app.listen(port, () => {
    console.log("Server is running with port :" , port)
})