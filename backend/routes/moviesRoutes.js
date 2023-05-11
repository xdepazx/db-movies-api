const express = require('express')
const router = express.Router()
const {getMovies, setMovies, updateMovies, deleteMovies} = require ('../controllers/movieController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getMovies).post(setMovies,protect)

router.route('/:id').put(updateMovies, protect).delete(deleteMovies, protect)

module.exports = router