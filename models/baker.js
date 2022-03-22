// dependencies
const mongoose = require('mongoose')
const {
    Schema
} = mongoose

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Chandler', 'Joey', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker