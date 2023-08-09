import React, { useEffect, useState } from "react";
import "./main.css";
import "./App.css";
//import { MovieCard } from "./MovieCard";
import { Colorgame } from "./colorgames";
import { Movielist } from "./movies";

import { Routes, Route, Link, json } from "react-router-dom";
import { Movie } from "@mui/icons-material";
import { Home } from "./Home";
import { Error } from "./Error";
import { MovieDetails } from "./MovieDetails";
export default function App() {
  const [Movies, setMovies] = useState([]); // empty array because initail value should be empty
  // useEffect(() => {
  //   fetch("https://64c3961867cfdca3b65fef6d.mockapi.io/movies")
  //     .then((res) => res.json())
  //     .then((data) => setMovies(data));
  // }, []);
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}

      {/* <Colorgame /> */}
      {/* <Movielist /> */}
      <nav className="lin">
        <Link to="/color-game">Colorgame</Link>

        <Link to="/sid">welcome</Link>

        <Link to="/">Home</Link>
        <h2></h2>
        <Link to="/movies">Movies</Link>
        <Link to="/basic-form">Movies</Link>
      </nav>
      <Routes>
        <Route path="/sid" element={<h1>Welcome to my page!</h1>} />
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movielist Movies={Movies} setMovies={setMovies} />}
        />
        <Route path="/color-game" element={<Colorgame />} />
        <Route path="*" element={<Error />} />
        <Route path="/movies/:id" element={<MovieDetails Movies={Movies} />} />
        <Route path="/basic-form" element={<basicform />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}
