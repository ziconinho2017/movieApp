const mongoose = require("mongoose");
const movieSchema = mongoose.Schema(
    {
       name : String,
       title : String,
       released : Date,
       plot : String,
       genres : [String],
       directors : [String]
    }
)
mongoose.model('Movie',movieSchema,'movies');