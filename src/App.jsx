import { useEffect, useState } from "react"
import MovieCard from "./Components/MovieCard"

import './App.css'
import searchIcon from './assets/search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9821af3a'



const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  
  setMovies(data.Search);
}
  
  useEffect(() => {
    searchMovies('Spiderman')
   }, [])

  return (
    <div className="app">
      <h1>Brikita Movies</h1>
      <div className="search">
        <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={searchIcon} alt="search" onClick={()=> searchMovies(searchTerm) } />
      </div>
      {
        movies?.length > 0 ?
          (<div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
        ))}
          </div>) :
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
      }
      
    </div>
  )
}

export default App
