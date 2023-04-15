import { useState, useEffect } from "react";

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
        <div>
            {topMovies && topMovies.map((movie)=><p>{movie.title}</p>)}
        </div>
    )
}

export default Home;