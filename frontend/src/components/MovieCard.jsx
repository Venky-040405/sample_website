import { Link } from "react-router-dom";

function MovieCard({ movie, deleteMovie }) {
  return (
    <div className="card">

      <h2>{movie.title}</h2>

      <p>{movie.desc}</p>

      <div className="btn-group">

        <Link to={`/edit/${movie._id}`}>
          <button className="edit-btn">
            Edit
          </button>
        </Link>

        <button
          className="delete-btn"
          onClick={() => deleteMovie(movie._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default MovieCard;