const mongoose = require("mongoose")
const Movie = mongoose.model(process.env.MOVIEMODEL)
const getAll = function(req,res){
    let count = parseInt(process.env.DEFAULT_LIMIT);
    let offset = 0;
    Movie.find().skip(offset).limit(count).exec(function(err,movies){
        const response = {
            status : 200,
            message : movies
        }
        if(err){
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}
const getOne = function(req,res){
    const movieId = req.params.movieId;
    if(!mongoose.isValidObjectId){
        res.status(400).json({"message":process.env.INVALID_ID})
        return
    }
    Movie.findById(movieId).exec(function(err,movie){
        const response = {
            status : 200,
            message : movie
        }
        if(err){
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}
const deleteOne = function(req,res){
    const movieId = req.params.movieId;
    if(!mongoose.isValidObjectId){
        res.status(400).json({"message":process.env.INVALID_ID})
        return
    }
    Movie.findByIdAndDelete(movieId).exec(function(err,movie){
        const response = {
            status : 200,
            message : movie
        }
        if(err){
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}
module.exports = {
    getOne,
    getAll,
    deleteOne
}



