const express       = require('express')
const db            = require('./db/connections')
const exphbs        = require('express-handlebars')
const PORT          = 3000
const app           = express()
const path          = require('path')
const bodyParser    = require('body-parser')
const Rent          = require('./models/Rental')
const Sequelize     = require('sequelize')
const Op            = Sequelize.Op

// db connection

db.authenticate()
    .then(() => {
        console.log('Connection to the databse has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);        
    })

// body parser
app.use(bodyParser.urlencoded({extended: false}))

// handle bars
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.listen(PORT, () => {
    console.log(`Connecting with server on port ${PORT}...`)
})

app.get('/', (req,res) => {

    const search = req.query.rent
    const query = '%'+search+'%'

    const oneMinuteAgo = new Date();
    oneMinuteAgo.setMinutes(oneMinuteAgo.getHours() - 1);

    if(!search){

        Rent.findAll({    
            where: {
                new_rent: 1,
                createdAt: {
                    [Sequelize.Op.lte]: oneMinuteAgo
                }
            }
        })
        .then(rents => {
            rents.forEach(rent => {
                rent.update({
                    new_rent: 0
                });
            });
        })
        .catch(error => {
            res.status(400).send(error);
            console.error(error)
        })

        Rent.findAll({
            order: [
            ['new_rent', 'DESC'],
            ['createdAt', 'DESC']
        ]})
        .then(rents => {
            res.render('index', {
                rents
            })
        })
        .catch(error => {
            res.status(400).send(error);
            console.error(error)
        })
    }else{
        Rent.findAll({ 
            where: {title: {[Op.like]: query}}, 
            order: [
            ['new_rent', 'DESC'],
            ['createdAt', 'DESC']
        ]})
        .then(rents => {
            res.render('index', {
                rents, query, search
            })
        })
        .catch(error => {
            res.status(400).send(error);
            console.error(error)
        })
    }    
        
})

// jobs routes

app.use('/rents', require('./routes/rents'))