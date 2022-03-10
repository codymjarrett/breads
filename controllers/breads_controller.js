const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
// INDEX
breads.get('/', (req, res) => {
    res.render('index', {breads: Bread, title: 'Index Page'})
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    const pickedBread = Bread[Number(req.params.arrayIndex)]

    if(pickedBread){
      res.render('Show', {
        bread: pickedBread
      })
    } else {
      res.send('404')
    }
})

module.exports = breads