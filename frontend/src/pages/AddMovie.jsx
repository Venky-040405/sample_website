import { useNavigate } from "react-router-dom";
import MovieForm from "../components/MovieForm";

const API = "http://localhost:3000/new_routes";

function AddMovie() {

  const navigate = useNavigate();

  async function addMovie(movie) {

    await fetch(`${API}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    navigate("/");
  }

  return (
    <div className="container">

      <h1>Add Movie</h1>

      <MovieForm submitHandler={addMovie} />

    </div>
  );
}

export default AddMovie;