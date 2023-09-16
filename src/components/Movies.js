import React, { useState } from "react";
import "../styles/FeaturedCard.css";
import { Link } from "react-router-dom";


export default function FeaturedCard(props) {

  const [isFav, setIsFav] = useState(false);

  const addTofav = () => {
    setIsFav(!isFav);
  };

  return (
    <div 
    className="featuredcard" data-testid="movie-card"
    key={props.id}
    >
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        alt={`Poster for ${props.title}`}
      />
      <ion-icon
        name="star"
        onClick={addTofav}
        style={{ color: isFav ? "#aebfc6ac" : "#323232" }}
      ></ion-icon>
      <p data-testid="movie-release-date" className="release-date">
        {props.release_date}
      </p>
      <p data-testid="movie-title" className="movie-title">
        <b>{props.title}</b>
      </p>
      <Link to={`/movies/${props.id}`} >more Info</Link>
    </div>
  );
}
