const express       = require('express')
const db            = require('./db/connections')
const PORT          = 3000
const app           = express()
const bodyParser    = require('body-parser')

// db connection

db.authenticate()
    .then(() => {
        console.log('Connection to the databse has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);        
    })

app.use(bodyParser.urlencoded({extended: false}))


// routes
app.listen(PORT, () => {
    console.log(`Connecting with server on port ${PORT}...`)
})

app.get('/', (req,res) => {
    res.send('home')
})

// jobs routes

app.use('/rents', require('./routes/rents'))