import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Home() {
  const [movieData, setMovieData] = useState([]);
  const [inputValue, setInputValue] = useState("movie");
  const [search, setSearch] = useState(inputValue)
  const [isDataAvailable, setIsDataAvailable] = useState(true)
  const getMovieData = async () => {
    try{
      const url = await axios.get(
        `https://www.omdbapi.com/?apikey=367f41be&s=${inputValue}`
    );
    setMovieData(url?.data?.Search);
    
    if(url?.data?.Response == "False"){
      setIsDataAvailable(false)
      
    }
    if(url?.data?.Response == "True"){
      setIsDataAvailable(true)
      
    }
    console.log(isDataAvailable)

    }
    catch(err){
        console.log("erroe", err)
    }

   
  };


  useEffect(() => {
    getMovieData();
  }, [search]); 
    
 

  function handleInputChange(e){
    setInputValue(e.target.value)
  }
 
  function handleSearch(){
    setSearch(inputValue)
  }

  return (
    <div>
      <div className="home-div">
        <h1 className="home-div-h1">
          You can watch any detail like actors, awards, nominations and rating
          etc... about your favourite moveis
        </h1>
        <div className="home-div-input">
          <input type="text" placeholder="search movies"  onChange={handleInputChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      
      
      <div className="card-div">
        
        {isDataAvailable? movieData?.map((movie) => {
          return (
            <div className="card" key={movie.imdbID}>
              <NavLink className="no-line" to={`/single/${movie?.imdbID}`}>
              <img
                src={movie.Poster}
                alt={movie.Title}
              />
              <h3 className="text-overflow">{movie.Title}</h3>
              </NavLink>
            </div>
          );
        }):

        <h2 className="card-unavailable">Movie not Available.......</h2>
      
      }
      </div>
    </div>
  );
}

export default Home;
