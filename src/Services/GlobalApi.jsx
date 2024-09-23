import axios from "axios";

const movieBaseURL = "";

const api_key = "";

const movieByGenreBaseURL = "";

const getTrendingVideos = axios.get(
  movieBaseURL + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
