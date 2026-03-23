import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import { type Movie } from "./MovieList";

function App() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [movieToAdd, setMovieToAdd] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movieToAdd}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setMoviesList(json.results);
          setIsLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [movieToAdd]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Movie Search</h1>
      <input
        className="w-full p-2 rounded-lg border"
        value={movieToAdd}
        onChange={(e) => {
          setMovieToAdd(e.target.value);
          setIsLoading(true);
        }}
      ></input>
      <MovieList movieList={moviesList} />

      {movieToAdd === "" && moviesList.length === 0 && (
        <p className="text-left">Search for a movie above</p>
      )}

      {!isLoading && movieToAdd.length > 0 && moviesList.length === 0 && (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default App;
