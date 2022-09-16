import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList(props) {
  return(
    <section className='movies-card-list'>
      <div className='movies-card-list__container container'>
        <ul className={props.savedMovies ? 'movies-card-list__grid_button_margin' : 'movies-card-list__grid'}>
          <MoviesCard savedMovies={props.savedMovies ? true : false}/>
          <MoviesCard savedMovies={props.savedMovies ? true : false}/>
        </ul>
        <button type='button' className={props.savedMovies ? 'movies-card-list__button_hidden' : 'movies-card-list__button'}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
