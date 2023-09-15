import SearchMovie from "./SearchMovie";
import "../styles/homepage.css";
import { useState } from "react";
import { useEffect } from "react";
import FeaturedCard from "../components/FeaturedCard";
export default function Homepage() {
  const [movies, setMovies] = useState([]);

  const getTopMovies = async () => {
    //  e.preventDefault();

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=732e7e4c2148b94995d37bb75b1b2aa9`;

    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };
  useEffect(() => {
    getTopMovies();
  }, []);

let topMovies=movies.map((movie,index)=>{
        // console.log(index);
        return <FeaturedCard {...movie} key={movie.id} />
        
})
let topTen=[];
  for(let i=0; i<10; i++){
    topTen.push(topMovies[i])
  }


  return (
    <div className="homepage">
      <SearchMovie  />

      <div className="featured-container"> 
      <h1>TOP TEN</h1>  
      <div className="top-ten-grid">
          {topTen}
      </div>
      </div>
    </div>
  );
}
