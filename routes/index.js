const express = require("express");
const movieController = require("../api/controllers/movie.controller");
const router = express.Router();
router.get('/movies',movieController.getAll);
router.get('/movies/:movieId',movieController.getOne);
router.delete('/movies/:movieId',movieController.deleteOne);
module.exports = router;