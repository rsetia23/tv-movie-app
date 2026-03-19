import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import { type Movie } from "./MovieList";

function App() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [movieToAdd, setMovieToAdd] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movieToAdd}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((json) => setMoviesList(json.results));
    }, 500);

    return () => clearTimeout(timer);
  }, [movieToAdd]);

  return (
    <>
      <input
        value={movieToAdd}
        onChange={(e) => setMovieToAdd(e.target.value)}
      ></input>
      <MovieList movieList={moviesList} />
    </>
  );
}

export default App;
