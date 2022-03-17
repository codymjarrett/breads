const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// INDEX
breads.get('/', (req, res) => {
  Bread.find().then(foundBread => {
    res.render('index', {breads: foundBread, title: 'Index Page'})
    
  })

  // res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})



// SHOW
breads.get('/:arrayIndex', (req, res) => {
    const pickedBread = Bread[Number(req.params.arrayIndex)]

    if(pickedBread){
      res.render('Show', {
        bread: pickedBread,
        index: req.params.arrayIndex
      })
    } else {
      res.render('404')
    }
})

// EDIT - example: breads/2/edit
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})

// CREATE
breads.post('/', (req, res) => {
 const hasImage = req.body.image;

 if (!hasImage){
   req.body.image = 'https://media.istockphoto.com/photos/detailed-closeup-of-sliced-grain-bread-on-white-background-picture-id157587362?s=612x612'
 }

  console.log(req.body)
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// DELETE  breads/:id
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE breads/:id
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})



module.exports = breads