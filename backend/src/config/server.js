const port = 3333

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.get('/appCheck' , (req, res) =>{
    return res.status(200).json({status: 'online'})
})
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())


server.listen(port, function () {
    console.log(`Server is running on port ${port}.`)
})


module.exports = server