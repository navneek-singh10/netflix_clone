
const API_KEY = "c2850ebe04502724ace76f3435a8d0f6";

const requests = {

fetchPopular: `/movie/popular?api_key=${API_KEY}`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,
fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
fetchDiscoverTVShows: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`,
fetchLatestReleases: `/movie/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;




// https://image.tmdb.org/t/p/original/trending/all/week?api_key=c2850ebe04502724ace76f3435a8d0f6&language=en-US



//fetchHorrorMovies:  https://api.themoviedb.org/3/discover/movie?api_key=c2850ebe04502724ace76f3435a8d0f6&with_genres=27
//fetchPopular: https://api.themoviedb.org/3/movie/popular?api_key=c2850ebe04502724ace76f3435a8d0f6
//fetchActionMovies: https://api.themoviedb.org/3/discover/movie?api_key=c2850ebe04502724ace76f3435a8d0f6&with_genres=28
//fetchUpcoming: https://api.themoviedb.org/3/movie/upcoming?api_key=c2850ebe04502724ace76f3435a8d0f6
//fetchNowPlaying:  https://api.themoviedb.org/3/movie/now_playing?api_key=c2850ebe04502724ace76f3435a8d0f6
//fetchLatestReleases: https://api.themoviedb.org/3/movie/latest?api_key=c2850ebe04502724ace76f3435a8d0f6&language=en-US
//fetchNetflixOriginals: https://api.themoviedb.org/3/discover/tv?api_key=c2850ebe04502724ace76f3435a8d0f6&with_networks=123
//fetchDiscoverTVShows: https://api.themoviedb.org/3/discover/tv?api_key=c2850ebe04502724ace76f3435a8d0f6&sort_by=popularity.desc