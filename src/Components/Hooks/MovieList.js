import React, {useState, useEffect} from 'react'

const MovieList = props => {
    const [movies, setMovies] = useState(['Die Hard', 'Goodfellas', 'Resevoir Dogs'])
    const [userMovie, setUserMovie] = useState('')

    function addMovie() {
        const newList = [userMovie, ...movies]
        setMovies(newList)
        setUserMovie('')
    }

    useEffect(() => { //acts as a componentDidUpdate
        console.log('fired')
    }, [userMovie, movies])

    return (
        <div>
            {
                movies.map(movieStr => <h2>{movieStr}</h2>)
            }
            <input 
                onChange={e => setUserMovie(e.target.value)} 
                placeholder='enter a movie'
                value={userMovie}
            />
            <button onClick={addMovie}>Add Movie</button>
        </div>
    )
}

export default MovieList;