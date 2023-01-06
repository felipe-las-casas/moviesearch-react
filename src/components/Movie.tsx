import IMovie from "../types/types";


const Movie = ({ result }: IMovie) => {
    return (
        <div className='card' >
            <img src={result.Poster} alt={`Poster of the movie ${result.Title}`} />
            <h2>{result.Title}</h2>
            <p>{result.Year}</p>
            <p><i>"{result.Plot}"</i></p>
            <p><b>Metascore:</b> {result.Metascore}</p>
            <p><b>Director:</b> {result.Director}</p>
            <p><b>Actors:</b> {result.Actors}</p>
            <p><b>Country:</b> {result.Country}</p>
            <p><b>Runtime:</b> {result.Runtime}</p>
        </div>
    )
}

export default Movie;