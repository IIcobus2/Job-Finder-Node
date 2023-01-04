const express   = require('express')
const router    = express.Router()
const Rental    = require('../models/Rental')
// rota de teste
router.get('/test', (req,res) => {
    res.send('deu certo')
})

// detalhe da vaga
router.get('/detail/:id', (req,res) => {
  Rental.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((rent) => {
    res.render('detail',{
      rent
    })
  })
  .catch((error) => {
    res.status(400).send(error);
    console.error(error)
  })
  // res.render('details')
})


//form de rota de envio
router.get('/create', (req,res) => {
  res.render('create')
})

// rota de post de dados
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
      console.log('Sucesso!\nAnuncio criado.')
    }).catch(error => {
      res.status(400).send(error);
      console.log(error)
    });
  });

  module.exports = router