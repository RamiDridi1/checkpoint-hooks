import { useNavigate, useParams } from "react-router-dom";
import { MovieData } from "./MovieData";
const Trailer =()=> {
    const {id}=useParams()
    
    const navigate=useNavigate()

    const redirection=()=>{
        navigate("/") }

    const movie=MovieData.find((el)=>el.id===Number(id))

    return (
        <div className="tr">
        <iframe width="853" height="480" src={movie.trailer} title="Movie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button onClick={redirection}>HOME</button>
        </div>
    );
}
export default Trailer;