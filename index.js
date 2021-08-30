const port    = 3003
const express = require('express')
const app     = express()
const consign = require('consign')
const con     = require('./knex/knx') 

consign()
        .then('/express/exps.js')
        .then('/api')
        .then('/config/routes.js')
        .into(app)

app.con = con

app.listen(process.env.PORT || port,() => console.log(`online into port: ${port}`))