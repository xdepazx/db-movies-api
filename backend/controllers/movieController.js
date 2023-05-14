const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

const getMovies = asyncHandler (async (req, res )=> {
    const movies = await Movie.find(req.body)
    res.status(200).json(movies)
})


//! set x user
const setMovies = asyncHandler (async (req, res )=> {
    if(!req.body.title) {
        res.status(400)
        throw new Error ('Favor de introducir un titulo para la pelicula')
    }
    const movie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        vote_count: req.body.vote_count,
        user:req.user.id
    })

    res.status(201).json(movie)
})

// * aquí debería ir el vote_count
const updateMovies = asyncHandler (async (req, res )=> {
    const movie = await Movie.findById(req.params.id)
    if(!movie) {
        res.status(400)
        throw new Error('Movie no encontrada')
    }
    /* if (movie.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no autorizado')
    } */

    const movieModificada = await Movie.findByIdAndUpdate(req.params.id,{vote_count: movie.vote_count}, {new: true})
    movie.vote_count++
    await movie.save()
    res.status(200).json(movieModificada)
})

const deleteMovies = asyncHandler (async (req, res )=> {
    const movie = await Movie.findById(req.params.id)
    if(!movie) {
        res.status(400)
        throw new Error('Movie not found')
    }
    /* if (movie.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado, la tarea no pertenece al usuario logeado')
    } */
    await movie.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getMovies,
    setMovies,
    updateMovies,
    deleteMovies
}