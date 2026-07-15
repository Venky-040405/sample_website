import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../components/MovieForm";

const API = "http://localhost:3000/new_routes";

function EditMovie() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateMovie(updatedMovie) {
    await fetch(`${API}/update/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updatedMovie),
    });

    navigate("/");
  }

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>Edit Movie</h1>

      <MovieForm
        initialData={movie}
        submitHandler={updateMovie}
      />
    </div>
  );
}

export default EditMovie;