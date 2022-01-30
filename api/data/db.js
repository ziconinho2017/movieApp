const mongoose = require("mongoose");
require("./movie-model");
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})