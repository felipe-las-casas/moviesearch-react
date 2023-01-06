import { useState, KeyboardEvent, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import IMovie from "../types/types";
import api from "../interface/api";
import Context from "../context/Context";

const Search = () => {
    const handleMovie = (e:any) => {
        const { value } = e.target;
        setMovieName(value)
      }
      const handleYear = (e:any) => {
        const { value } = e.target;
        setYear(value)
      }
      const [result, setResult] = useContext<IMovie>(Context)
      const [movieName, setMovieName] = useState('')
      const [year, setYear] = useState('')
      async function searchMovie() {
        const { data } = await api.get(`/?t=${movieName.replace(' ','+')}&y=${year}&apikey=ec050953`)
        setResult(data)
        setMovieName('')
        setYear('')
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && movieName.length > 1)  {
          searchMovie()
        }
      }
    return (
        <div className='form'>
            <h1>Movie Search</h1>
            <input type="text" placeholder='Title' 
            value={movieName} onChange={handleMovie} 
            onKeyDown={handleKeyDown} autoFocus />
            <input type="text" placeholder='Year'value={year} onChange={handleYear} onKeyDown={handleKeyDown}/>
            <button onClick={searchMovie} disabled={!movieName}><BsSearch /></button>
        </div>
    )
}

export default Search;