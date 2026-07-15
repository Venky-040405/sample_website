import { useState } from "react";

function MovieForm({ submitHandler, initialData }) {

  const [title, setTitle] = useState(
    initialData?.title || ""
  );

  const [desc, setDesc] = useState(
    initialData?.desc || ""
  );

  const handleSubmit = (e) => {

    e.preventDefault();

    submitHandler({
      title,
      desc,
    });

  };

  return (
    <form
      className="movie-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <textarea
        placeholder="Movie Description"
        value={desc}
        onChange={(e) =>
          setDesc(e.target.value)
        }
        required
      />

      <button type="submit">
        Save
      </button>

    </form>
  );
}

export default MovieForm;