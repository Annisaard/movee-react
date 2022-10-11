const requests = {
  genreMovie: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDI_KEY}&language=en-US`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDI_KEY}&language=en-US&page=1`,
};
export default requests;
