function MoviesCard(props) {
  return(
    <li className="movies-card">
      <img className='movies-card__img' src='https://static.okko.tv/images/v2/15623724?scale=1&quality=80' alt='Фильм'/>
      <div className='movies-card__bottom'>
        <div className='mobies-card__info'>
          <p className='movies-card__name'>33 слова о дизайне</p>
          <p className='movies-card__time'>1ч 47м</p>
        </div>
        <button className={props.savedMovies ? 'movies-card__delite' : 'movies-card__like'}></button>
      </div>
    </li>
  )
}

export default MoviesCard;
