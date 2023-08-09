import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = Movies[id];
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://64c3961867cfdca3b65fef6d.mockapi.io/movies/" + id)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  });
  return (
    <div className="moviecard">
      {/* <img className="pic" src={name.poster} /> */}
      <iframe
        width="702"
        height="395"
        src={movie.trailer}
        title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>{movie.name}</h2>
      <div className="head">
        <h2>❤️ {movie.rating}</h2>
      </div>

      {/* <button onClick={() => navigate("/color-game")}> colors </button> */}
      <p>{movie.summary}</p>

      {/* <p>{summary}</p> */}
    </div>
  );
}
