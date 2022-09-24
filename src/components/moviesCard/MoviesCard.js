function MoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч' + ' ' + minutes + 'м';
  };

  return(
    <li className="movies-card">
      <img className='movies-card__img' src={`https://api.nomoreparties.co${props.movie.image.url}`} alt='Фильм'/>
      <div className='movies-card__bottom'>
        <div className='mobies-card__info'>
          <p className='movies-card__name'>{props.movie.nameRU}</p>
          <p className='movies-card__time'>{getTimeFromMins(props.movie.duration)}</p>
        </div>
        <button type='button' className={props.savedMovies ? 'movies-card__delite' : 'movies-card__like'}></button>
      </div>
    </li>
  )
}

export default MoviesCard;
