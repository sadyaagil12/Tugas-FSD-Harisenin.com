import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../firebaseConfig";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [movies, setMovies] = useState({});

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

    return () => setMovies({});
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      const db = getDatabase(app);
      const movieRef = ref(db, `movies/${id}`);
      remove(movieRef)
        .then(() => {
          toast.success("Movie deleted successfully");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="style-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Genre</th>
            <th style={{ textAlign: "center" }}>Year</th>
            <th style={{ textAlign: "center" }}>Rating</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(movies).length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Movies Found
              </td>
            </tr>
          ) : (
            Object.keys(movies).map((id, index) => (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{movies[id].name}</td>
                <td>{movies[id].genre}</td>
                <td>{movies[id].year}</td>
                <td style={{ textAlign: "center" }}>{movies[id].rating}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
