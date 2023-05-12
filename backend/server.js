const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

/* MULTER const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/uploads')
    },
    filename:( req, file, cb) =>{
        cb(null,file.originalname)
    }
})

const upload = multer ({
    storage: storage,
    limits: {fileSize: 10000000},
    fileFilter: function ( req, file, cb) {
        checkFileType(file, cb)
    }
})

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/


//verificamos la extension
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())

    //verificamos el mimetype
    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb('Error: Sólo se admiten imagenes')
    }
} */

const app = express()

/* MULTER
app.post('/api/movies', upload.single("testImage"), (req, res) => {
    const saveImage = new movieModel({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: {
            data: fs.readFileSync("./public/uploads/" + req.file.filename),
            contentType: "image/png",
        },
        vote_count: req.body.vote_count
    });
    saveImage.save()
    .then((res) => {
        console.log("Image saved")
    })
    .catch((err) => {
        console.log(err, "error")
    });
    res.send('image saved')
}) */

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/movies', require('./routes/moviesRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server iniciado en el puerto ${port}`))
