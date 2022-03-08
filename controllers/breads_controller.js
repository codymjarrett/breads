const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
// INDEX
breads.get('/', (req, res) => {
    res.render('index', {breads: Bread})
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    const pickedBread = Bread[Number(req.params.arrayIndex)]
    res.send(pickedBread)
})

module.exports = breads