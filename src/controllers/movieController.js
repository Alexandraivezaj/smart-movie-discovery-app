const moviesList = require("../../responses/movies-list.json");
const movieDetails = require("../../responses/movies-details.json");

function getMovies(req, res) {
  res.json(moviesList);
}

function getMovie(req, res) {
  const { id } = req.params;

  if (Array.isArray(movieDetails)) {
    const movie = movieDetails.find((m) => String(m.id) === String(id));
    if (movie) return res.json(movie);
  }

  res.json(movieDetails);
}

function createMovie(req, res) {
  res.status(201).json({
    message: "Movie created successfully",
    data: req.body,
  });
}

function updateMovie(req, res) {
  res.json({
    message: `Movie ${req.params.id} updated successfully`,
    data: req.body,
  });
}

function deleteMovie(req, res) {
  res.json({
    message: `Movie ${req.params.id} deleted successfully`,
  });
}

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
