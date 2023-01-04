const express   = require('express')
const router    = express.Router()
const Rental    = require('../models/Rental')

router.get('/test', (req,res) => {
    res.send('deu certo')
})

router.post('/create', (req, res) => {
    // Create a new user in the database
    console.log(req.body)
    let {title, value, locator, email, new_rent, city} = req.body;
    Rental.create({
        title,
        value,
        locator,
        email,
        new_rent,
        city
    }).then(() => {
      res.redirect('/')
    }).catch(error => {
      res.status(400).send(error);
      console.log(error)
    });
  });

  module.exports = router