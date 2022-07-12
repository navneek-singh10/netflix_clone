


import axios from "axios";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Row.css";



function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);

  const[trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
  }
  const opts ={
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {

    if(trailerUrl) {
      setTrailerUrl('')
    }
    else {
      movieTrailer(movie?.name  || movie?.title || movie?.original_title || "" )
      .then((url) => {
       const urlsParams = new URLSearchParams(new URL(url).search);
     setTrailerUrl(urlsParams.get("v"))
     
     }
   
     )
    }
    };

  return (
    <div className="row">
      <h1>{title} </h1>
      <div className="row_posters">
        {movie?.map((movie) =>
          movie?.poster_path && movie?.backdrop_path ? (
            <img
              className={`row_poster ${isLargeRow && "rowPoster_large"}`}
              key={movie.id}

              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.name}
            />
          ) : (
            ""
          )
        )}
      </div>
      {
      trailerUrl && <YouTube
      videoId={trailerUrl} opts={opts}
      
      
      />
}
    </div>
  );
}

export default Row;