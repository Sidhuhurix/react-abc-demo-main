import React from "react";

export function Moviecard({ name, poster, summary, rating }) {
  return (
    <div className="moviecard">

      <img className="pic" src={poster} />
      <div className="head">
        <h2>{name}</h2>
        <h2>❤️ {rating}</h2>
      </div>
      <p>{summary}</p>
    </div>
  );
}
