const Sequelize = require('sequelize')
const db = require('../db/connections')

const Rental = db.define('rental', {
    title: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.STRING
    },
    locator: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new_rent: {
        type: Sequelize.INTEGER
    },
    city: {
        type: Sequelize.STRING
    }
})


module.exports = Rental