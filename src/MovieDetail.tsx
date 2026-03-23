import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface MovieDetails {
  original_title: string;
  overview: string;
  poster_path: string;
}

function MovieDetail() {
  const params = useParams();
  const id = params.id;

  const [movieDets, setMovieDets] = useState<MovieDetails | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setMovieDets(json));
  }, [id]);

  if (!movieDets) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">{movieDets.original_title}</h1>
      <p> Overview: </p>
      <p> {movieDets.overview} </p>

      <br />

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg">
        {" "}
        <Link to="/"> Home </Link>{" "}
      </button>
    </div>
  );
}

export default MovieDetail;
