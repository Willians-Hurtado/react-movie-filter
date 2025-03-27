import { useEffect, useState } from 'react'
//import { useState, useEffect } from 'react';

const filmList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [film, setFilm] = useState(filmList);
  const [genreType, setGenreType] = useState('')

  useEffect(() => {

    if (genreType === "") {
      setFilm(filmList)
    } else {
      setFilm(filmList.filter((film) => film.genre === genreType))
    }



  }, [genreType]);



  return (
    <>

      <select onChange={(e) => setGenreType(e.target.value)}>
        <option value="">All films</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>


      {film.map((films, index) => (
        <li key={index}>{films.title}</li>
      ))}


    </>
  )
}

export default App
