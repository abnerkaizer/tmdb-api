import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import './MovieGrid.css'


const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const getTopRatedMovies = async(url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        setTopMovies(data.results);
    };
    useEffect(()=>{
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    },[]);
    return(
        <div className="container">
            <h2 className="title">Melhores filmes: </h2>
            <div className="movies-container">
                {topMovies.length === 0 && <Loading/>}
                {topMovies.length > 0 && topMovies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default Home;