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
    return <div>

        <h1 key={movie.id}>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
    </div>;
  });

  return movieItems
}

export default MovieList; 
