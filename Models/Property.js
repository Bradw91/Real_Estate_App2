const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, 'please indicate location']
    },
    location: {
        type: String,
        required: [true, 'please give a city & state']
    },
    askingPrice: {
        type: Number,
        trim: true,
        required: [true, 'please indicate an asking price']
    },
    numBedrooms: {
        type: Number,
        required: [true, 'please give the number of bedrooms']
    },
    numBathrooms: {
        type: Number,
        required: [true, 'please give the number of bathrooms']
    },
    sqMeters: {
        type: Number,
        required: [true, 'please indicate size in square meters']
    },
    description: {
        type: String,
        required: false
    },
    imgURL: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Property",PropertySchema);