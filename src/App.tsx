import api from './api'
import { useState, KeyboardEvent } from 'react'
import './App.css'
import { BsSearch } from 'react-icons/bs'

interface IMovie {
  Error: string;
  Title: string;
  Poster: string;
  Year: string;
  Country: string;
  Actors: string;
  Plot: string;
  Director: string;
  Runtime: string;
  Metascore: string;

}

function App() {
  function handleMovie (e:any) {
    const { value } = e.target;
    setMovieName(value)
  }
  function handleYear (e:any) {
    const { value } = e.target;
    setYear(value)
  }
  const [result, setResult] = useState<IMovie>(Object)
  const [movieName, setMovieName] = useState('')
  const [year, setYear] = useState('')
  async function searchMovie() {
    const { data } = await api.get(`/?t=${movieName.replace(' ','+')}&y=${year}&apikey=ec050953`)
    setResult(data)
    setMovieName('')
    setYear('')
    console.log(movieName)
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && movieName.length > 1)  {
      searchMovie()
    }
  }

  return (
    <div className='app'>
      <div className='form'>
        <h1>Movie Search</h1>
        <input type="text" placeholder='Title' value={movieName} onChange={handleMovie} onKeyDown={handleKeyDown}/>
        <input type="text" placeholder='Year'value={year} onChange={handleYear} onKeyDown={handleKeyDown}/>
        <button onClick={searchMovie} disabled={!movieName}><BsSearch /></button>
      </div>
      {result.Title && <div className='card'>
      <img src={result.Poster} alt={`Poster of the movie ${result.Title}`} />
      <h2>{result.Title}</h2>
      <p>{result.Year}</p>
      <p><i>"{result.Plot}"</i></p>
      <p><b>Metascore:</b> {result.Metascore}</p>
      <p><b>Director:</b> {result.Director}</p>
      <p><b>Actors:</b> {result.Actors}</p>
      <p><b>Country:</b> {result.Country}</p>
      <p><b>Runtime:</b> {result.Runtime}</p>
      </div>}
      {result.Error && <p>Movie not Found</p>}
    </div>
  )
}

export default App;
