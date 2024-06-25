import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header";
import Details_page from "../components/details_page";
// import { useMovieContext } from '../Moviecontext';

const WrapperDesktop = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    margin: 3rem auto;
    flex-direction:row;
    justify-content: center;
  }
`;

function Moviepage() {
  // console.log({ selectedMovie });
  // if (!selectedMovie) {
  //   return <div>Select a movie to view details.</div>;
  // }

  //   Poster:
  //     "",
  //   Title: "Love Lasts Three Years",
  //   Type: "movie",
  //   Year: "2011",
  //   imdbID: "tt1638328",
  // });

  // useEffect(() => {
  //   if (movie && movie.Title) {
  //     setMovieData(movie);
  //     console.log("object");
  //   }
  // }, [movie]);

  // console.log(movieData);
  // console.log(movie);

  return (
    <div style={{ top: "5em" }} className="
    d-flex flex-row align-items-center  justify-content-center moviePage position-relative" >
      <Details_page
        // moviedetail={selectedMovie}
      ></Details_page>
    </div>
  );
}

export default Moviepage;
