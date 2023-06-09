const mongoose = require ('mongoose')

const movieSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: [true, 'introduce titulo']
    },
    overview: {
        type: String,
        required: [true, 'introduce overview']
    },
    poster_path: {
        data: Buffer,
        type: String,
        required: [true, 'introduce imagen']
    },
    vote_count: {
        type: Number,
        required: [true, 'introduce numero de likes']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)