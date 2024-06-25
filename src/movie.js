import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "./Moviecontext";
import "./css/movie.css";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function Movie({ movie }) {
  const { setSelectedMovie } = useMovieContext();

  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  if (!movie) {
    return <div>No movie selected.</div>;
  }

  // console.log({ movie });
  return (
    <Link
      className="singlemoviewrp"

      to={{
        pathname: "/moviedetails",
      }}
      onClick={() => setSelectedMovie({ ...movie })}
    >
      <span className="moviename">{movie.Title}</span>
      <img className="moviepic" src={movie.Poster} alt={movie.Title} />
      <span className="moviedesc">{movie.Year}</span>
    </Link>
  );
}

export default Movie;
