import { useState } from "react";
import "./styles.css";

import { MovieData } from "./MovieData";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import SearchMovie from "./SearchMovie";
export default function App() {
  const [movies, setMovies] = useState(MovieData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const addHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="wrapper">
      <SearchMovie
        setSearchName={setSearchName}
        setSearchRating={setSearchRating}
      />
      <MovieList
        movies={movies}
        searchName={searchName}
        searchRating={searchRating}
      />
      <AddMovie addHandler={addHandler} />
    </div>
  );
}
