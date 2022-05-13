const express = require('express')
const server = express()


server.get('/', (req, res) =>{
    res.status(200).send('<H2>HEROKU DEPLOYMENT</H2>')
})

server.get('/node-env', (req, res) =>{
    res.status(200).json({NODE_ENV:process.env.NODE_ENV})
})


module.exports = server