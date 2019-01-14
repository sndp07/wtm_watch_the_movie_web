import React from 'react'

import './_style.css'

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <section className="movie__image">
        <img src={movie.image} alt="Movie-Img" />
      </section>
      <div>
        <section>
          Name: {movie.name}
        </section>
        <section>
          Actor: {movie.actor}
        </section>
      </div>
    </div>
  )
}

export default Movie
