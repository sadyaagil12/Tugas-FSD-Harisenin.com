import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { app } from "../firebaseConfig";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  genre: "",
  year: "",
  rating: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [movies, setMovies] = useState({});
  const { name, genre, year, rating } = state;
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const db = getDatabase(app);
    const moviesRef = ref(db, "movies");

    onValue(moviesRef, (snapshot) => {
      if (snapshot.exists()) {
        setMovies(snapshot.val());
      } else {
        setMovies({});
      }
    });
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...movies[id] });
    } else {
      setState({ ...initialState });
    }

    return () => setState({ ...initialState });
  }, [id, movies]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !genre || !year || !rating) {
      toast.error("Please fill in all fields.");
    } else {
      const db = getDatabase(app);
      if (id) {
        const moviesRef = ref(db, `movies/${id}`);

        set(moviesRef, state)
          .then(() => {
            toast.success("Movie updated successfully");
            setTimeout(() => navigate("/"), 500);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      } else {
        const moviesRef = ref(db, "movies");
        const newMovieRef = push(moviesRef);
        set(newMovieRef, state)
          .then(() => {
            toast.success("Movie added Successfully");
            setTimeout(() => navigate("/"), 500);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          textAlign: "center",
          fontWeight: "bold",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Genre"
          value={genre || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year"
          value={year || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          id="rating"
          name="rating"
          placeholder="Rating"
          value={rating || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update Movie" : " Add Movie"} />
      </form>
    </div>
  );
};

export default AddEdit;
