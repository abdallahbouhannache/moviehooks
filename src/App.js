import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./header";
import Home from './page/home';
import Moviepage from './page/moviepage';
import Footer from "./footer";


// http://www.omdbapi.com/?i=tt3896198&apikey=d3e6d9ee

/* const poster =
  movie === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster; */

function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetails" element={<Moviepage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;