import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div>
        <h2 className="favourites">Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
    </div>
  );
}
export default Favourites;
