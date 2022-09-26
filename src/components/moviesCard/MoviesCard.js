import { useState, useEffect } from 'react';

function MoviesCard(props) {
  const [likeActive, setLikeActive] = useState(false);
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч' + ' ' + minutes + 'м';
  };

  useEffect(() => {
    if (!props.pageSaveMovies) {
      props.myMovies.map((myMovie) => {
        if (myMovie.movieId === props.movie.id) {
          setLikeActive(true);
        }
      })
    }
  }, [])

  function savedMovie() {
    setLikeActive(true);
    if (likeActive) {
      props.myMovies.map((myMovie) => {
        if (myMovie.movieId === props.movie.id) {
        props.onDeleteMovie(myMovie);
        }
      })
      setLikeActive(false);
    } else {
      props.onSavedMovie(props.movie);
    }
  }

  function deleteMovie() {
    props.onDeleteMovie(props.movie);
  }

  return(
    <li className="movies-card">
      <a href={props.movie.trailerLink} target="_blank" rel="noreferrer" className="movies-card__container">
        <img className='movies-card__img' src={props.pageSaveMovies ? props.movie.image : `https://api.nomoreparties.co${props.movie.image.url}`} alt='Фильм'/>
      </a>
      <div className='movies-card__bottom'>
        <div className='mobies-card__info'>
          <p className='movies-card__name'>{props.movie.nameRU}</p>
          <p className='movies-card__time'>{getTimeFromMins(props.movie.duration)}</p>
        </div>
        <button onClick={props.pageSaveMovies ? deleteMovie : savedMovie} type='button' className={props.pageSaveMovies ? 'movies-card__delite' : likeActive ? 'movies-card__like_active' : 'movies-card__like'}></button>
      </div>
    </li>
  )
}

export default MoviesCard;
