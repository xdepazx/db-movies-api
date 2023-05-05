const mongoose = require ('mongoose')

const movieSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, 'introduce titulo']
    },
    overview: {
        type: String,
        required: [true, 'introduce overview']
    },
    poster_path: {
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