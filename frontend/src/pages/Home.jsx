import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API = "http://localhost:3000/new_routes";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const res = await fetch(API+"/");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteMovie(id) {
    const confirmDelete = window.confirm(
      "Delete this movie?"
    );

    if (!confirmDelete) return;

    await fetch(`${API}/delete/${id}`, {
      method: "DELETE",
    });

    getMovies();
  }

  return (
    <div className="container">

      <h1>Movie List</h1>

      {movies.length === 0 ? (
        <h3>No Movies Found</h3>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            deleteMovie={deleteMovie}
          />
        ))
      )}

    </div>
  );
}

export default Home;