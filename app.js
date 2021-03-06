if(process.env.NODE_ENV=='development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const routes = require('./routes/index')
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(routes)

module.exports = app