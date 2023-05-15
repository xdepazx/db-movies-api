const express = require('express')
const router = express.Router()
const {getMovies, getMovie, setMovies, updateMovies, deleteMovies} = require ('../controllers/movieController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getMovies).post(protect, setMovies)
router.get('/:id', getMovie)

router.route('/:id').put(updateMovies).delete(protect, deleteMovies)

module.exports = router