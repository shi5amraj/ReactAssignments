import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from "./Components/MovieList";
import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [search,setSearch]= useState("");
  const [movies,setMovies]=useState([]);


  const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const getAllMovies = async ()=>
  {
  try
  {
    const resp= await axios.get(APIURL);
    console.log(resp.data.results)
    setMovies(resp.data.results);
  }
  catch(err)
  {
    console.log(err.message)
  }

  }

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      setMovies(response.data.results);
      console.log(response.data.results)
    } catch (err) {
      console.log(err.message);
    }
  };
 

  useEffect(()=>{
    
     if(search === "")
     {
      getAllMovies();
      
     }
     else
     {
      getSearchedMovies();
     
    
     }
  },[search]);

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 
  return (
    <>
    <div className="container">
    <h1 className="text-center my-3">Movie Search App</h1>
    <input type="search" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)}
        />
        

         <MovieList movies={movies} /> 
        
      
    </div>
    </>
  );
}

export default App;
