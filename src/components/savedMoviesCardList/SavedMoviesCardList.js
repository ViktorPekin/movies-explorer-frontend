import { useEffect } from 'react';
import MoviesCard from '../moviesCard/MoviesCard';

function SavedMoviesCardList(props) {

  useEffect(() => {
    props.onMyMovies(localStorage.getItem('token'));
  }, [])

  return(
    <section className='movies-card-list'>
      <div className='movies-card-list__container container'>
        <ul className='movies-card-list__grid_button_margin'>
          {(props.filerMyMovies) ?
            (props.filerMyMovies.length) ?
          props.filerMyMovies.map((movie) => (
            <MoviesCard movie={movie} key={movie._id} onSavedMovie={props.onSavedMovie} pageSaveMovies={props.pageSaveMovies} onDeleteMovie={props.onDeleteMovie}/>
          ))
          : <p className="movies-card-list__not-found">{props.errorMoviesApi ?
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
              : 'Ничего не найдено'}</p>
        : ''
          }
        </ul>
      </div>
    </section>
  )
}

export default SavedMoviesCardList;
