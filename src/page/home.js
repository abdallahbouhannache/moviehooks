import React, { useState, useEffect } from "react";
import "../App.css";
// import logo from "../logo.svg";
import Search from "../search";
import Movie from "../movie";
import MoviePage from "./moviepage";
import { useMovieContext } from '../Moviecontext';


function Home(props) {
    var randmovie = "movie";
    // const [poster, setPoster] = useState(0);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(null);

    const { category } = useMovieContext();

    const search = (svalue) => {
        setLoading(true);
        setErrors(null);
        
        fetch(`http://www.omdbapi.com/?s=${svalue}&type=${category}&page=1&apikey=d3e6d9ee`)
            .then((response) => response.json())
            .then((jsonresp) => {
                setTimeout(() => {
                    if (jsonresp.Response == "True") {
                        setMovies(jsonresp.Search);
                    } else {
                        setErrors(jsonresp.Error);
                    }
                    setLoading(false);
                }, 500);
            });
    };

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${randmovie}&type=${category}&apikey=d3e6d9ee`)
            .then((response) => response.json())
            .then((jsonresp) => {
                setTimeout(() => {
                    if (jsonresp.Response == "True") {
                        setMovies(jsonresp.Search);
                        console.log(jsonresp.Search);

                    } else {
                        setErrors(jsonresp.Error);
                    }
                    setLoading(false);
                }, 500);
            });
    }, [category]);

    return (
        <div>
            <div className="wrapbody">
                <Search search={search} />
                <div className="movieswrper">
                    {loading && !errors ? (
                        <span className="loadingpage">Loading ....</span>
                    ) : errors ? (
                        <div className="errorspage"> {errors}</div>
                    ) : (
                        movies.map((film, ind) => (
                            <Movie key={`${ind}-${film.Title}`} movie={film} />

                        ))
                    )}
                </div>
            </div>
        </div>
    )
}



export default Home