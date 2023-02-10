import React, { useState } from "react";
import PageWraper from "../components/PageWraper";
import Pagination from "../components/Pagination";
import Pelicula from "../components/Pelicula";
import peliculasJson from "../data/peliculas.json";

const MovieList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const TOTAL_BY_PAGE = 7;
  let movies = peliculasJson;
  // let URL_API = "https://lucasmoy.dev/data/react/peliculas.json";

  // const searchMovies = async () => {
  //   let result = await fetch(URL_API, {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   var json = await result.json();
  //   alert(json);
  // };

  // searchMovies();

  const getTotalPages = () => {
    let totalNumberMovies = peliculasJson.length;
    return Math.ceil(totalNumberMovies / TOTAL_BY_PAGE);
  };

  let moviesByPageMovies = movies.slice(
    (pageCurrent - 1) * TOTAL_BY_PAGE,
    pageCurrent * TOTAL_BY_PAGE
  );
  return (
    <>
      <PageWraper>
        {moviesByPageMovies.map((movie) => (
          <Pelicula
            title={movie.title}
            rating={movie.rating}
            director={movie.director}
            actors={movie.actors}
            date={movie.date}
            image={movie.image}
            description={movie.description}
          ></Pelicula>
        ))}
        <Pagination
          page={pageCurrent}
          total={getTotalPages()}
          onChange={(page) => {
            setPageCurrent(page);
          }}
        />
      </PageWraper>
    </>
  );
};
export default MovieList;
