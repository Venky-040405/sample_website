import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Movie CRUD App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/add">Add Movie</Link>
      </div>
    </nav>
  );
}

export default Navbar;