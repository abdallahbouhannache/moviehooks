// MovieContext.js
import React, { createContext, useContext, useState } from 'react';


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [category, setCategory] = useState(''); // Add category state here


  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, category, setCategory }}>
      {children}
    </MovieContext.Provider>
  );
};
