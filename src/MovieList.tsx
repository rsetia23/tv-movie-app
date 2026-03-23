import { Link } from "react-router-dom";

// describes a single movie
export interface Movie {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
}

// describes the props for the MovieList component
interface MovieListProps {
  movieList: Movie[];
}

function MovieList({ movieList }: MovieListProps) {
  const movieItems = movieList.map((movie) => {
    return (
      <Link to={`/movie/${movie.id}`}>
        <div>
          <h1 className="text-lg font-semibold p-2" key={movie.id}>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </Link>
    );
  });

  return <div className="grid grid-cols-4 gap-4">{movieItems}</div>;
}

export default MovieList;
