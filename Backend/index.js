const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongose = require('mongoose')

require('./config/mongodb.js')

app.db = db
app.mongose = mongose
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then ('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando na porta 3000')
})