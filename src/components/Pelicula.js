import React from "react";

const Pelicula = ({
  title,
  rating,
  director,
  actors,
  date,
  image,
  description,
}) => {
  return (
    <div className="movie-item-style-2">
      <img src={image} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{title}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{rating}</span> /10
        </p>
        <p className="describe">{description}</p>
        <p className="run-time">
          Run Time: 2h21’ . <span>MMPA: PG-13 </span>
          <span>{date}</span>
        </p>
        <p>
          Director: <a href="#">{director}</a>
        </p>
        <p>Stars: {actors}</p>
      </div>
    </div>
  );
};

export default Pelicula;
