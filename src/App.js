import { useState } from "react";
import "./styles.css";

import { MovieData } from "./MovieData";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import SearchMovie from "./SearchMovie";
import { Route,Routes } from "react-router-dom";
import Trailer from "./Trailer"
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
    
      <AddMovie addHandler={addHandler} />
      <Routes>
      <Route path="/" element={<MovieList 
        movies={movies}
        searchName={searchName}
        searchRating={searchRating}/>}/>
        
        <Route path='/Trailer/:id' element={<Trailer/>} />
      </Routes>
    </div>
  );
}
