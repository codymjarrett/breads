const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')






// INDEX
breads.get('/', async (req, res) => {

  // const foundBread = await Bread.find({}, {limit: 2})
  const foundBread = await Bread.find().lean()
  const foundBakers = await Baker.find().lean()

  console.log('foundBread', foundBread)
  console.log('foundBakers', foundBakers)
  
  res.render('index', {
    breads: foundBread,
    bakers: foundBakers,
    title: 'Index Page'
  })

})

// NEW
breads.get('/new', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      res.render('new', {
        bakers: foundBakers
      })
    })
})



// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => {
      console.log('foundBread', foundBread)
      res.render('show', {
        bread: foundBread,
      })
    }).catch(err => {
      res.render('404')
    })
})

// EDIT - example: breads/2/edit
breads.get('/:id/edit', (req, res) => {
  Baker.find().then(foundBakers => {
    Bread.findById(req.params.id)
      .then(foundBread => {
        res.render('edit', {
          bread: foundBread,
          bakers: foundBakers
        })
      })
  })
})

// CREATE
breads.post('/', (req, res) => {
  const hasImage = req.body.image;

  if (!hasImage) {
    req.body.image = undefined
    console.log('Body', req.body)
    //  req.body.image = 'https://media.istockphoto.com/photos/detailed-closeup-of-sliced-grain-bread-on-white-background-picture-id157587362?s=612x612'
  }

  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// DELETE  breads/:id
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE breads/:id
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})





module.exports = breads