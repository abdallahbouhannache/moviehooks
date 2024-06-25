import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { COLORS } from "../styles";
// import PriceDisplayer from "./PriceDisplayer";
import { useMovieContext } from '../Moviecontext';

const COLORS = {
  black: "#000",
  white: "#fff",
  veryDarkblue: "hsl(220, 13%, 13%)",
  gray: "hsl(219, 9%, 45%)",
  grayBlue: "hsl(220, 14%, 75%)",
  lightGrayBlue: "hsl(223, 64%, 98%)",
  orange: "hsl(26, 100%, 55%)",
  orangePale: "hsl(25, 100%, 94%)",
};

const SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const Container = styled.div`
  position: relative;
  padding: 1.5rem;
  `;
// @media (min-width: 768px) {
//   width: 50%;
// }

const Name = styled.h2`
  color: ${COLORS.orange};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const TitleMain = styled.h2`
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: ${COLORS.gray};
  line-height: 1.5;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const WrapperForDesktop = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const MainImage = styled.img`
  width: 20vw;
  border-radius: 1rem;
`;
// position: relative;    top: 3em;    border: 1px solid;    height: 30em

const Details_page = () => {

  const { selectedMovie } = useMovieContext();

  const [moviedata, setMoviedata] = useState(null);
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Poster, setPoster] = useState("");

  useEffect(() => {
    if (selectedMovie && selectedMovie.imdbID) {
      fetch(`http://www.omdbapi.com/?i=${selectedMovie.imdbID}&plot=full&apikey=d3e6d9ee`)
        .then((response) => response.json())
        .then((jsonresp) => {
          // setTimeout(() => {
          //   console.log(jsonresp);

          // }, 500);
          var { Title, Year, Poster, Ratings, ...rest } = jsonresp;

          setTitle(Title);
          setYear(Year);
          setPoster(Poster);
          setMoviedata(rest);

        });
    }
  }, [selectedMovie]);

  // console.log(name, description, pict, type, detail)

  return (
    <Container className="card d-flex flex-column align-items-center  justify-content-between">
      {moviedata && (
        <>
        <div className="">
          <div className="align-items-center d-flex flex-row justify-content-md-center">
          <MainImage src={Poster} alt="sneakers"></MainImage>
            <Name>{Title}</Name>
            <TitleMain>{Year}</TitleMain>
          </div>

        </div>
          <ul>
            {Object.entries(moviedata).map(([k, v]) => {
              return v &&
                <Description key={k}>
                  {k}:{v !== 'N/A' && "" + v}
                </Description>
            }
            )}
          </ul>
        </>
      )
      }
      {/* <PriceDisplayer price={price} discount={discount} /> */}
    </Container>
  );
};

export default Details_page;