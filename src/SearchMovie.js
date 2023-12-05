import ReactStars from "react-stars";
const SearchMovie = ({ setSearchName, setSearchRating }) => {
  const ratingChanged = (newRating) => {
    setSearchRating(newRating);
  };

  return (
    <div>
      <input onChange={(event) => setSearchName(event.target.value)} />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};
export default SearchMovie;