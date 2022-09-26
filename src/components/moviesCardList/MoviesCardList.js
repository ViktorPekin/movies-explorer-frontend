import { useState, useEffect } from "react";
import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList(props) {
  const [addNumberPerPage, setAddNumberPerPage] = useState(0);

  const [hiddenButton, setHiddenButton] = useState(true);

  useEffect(() => {
    if (window.screen.width > 1024) {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, 3)
      } else {
        checkedNuberCard(12, 3)
      }
    } else if (window.screen.width > 480) {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, 3)
      } else {
        checkedNuberCard(8, 3)
      }
    } else {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, 3)
      } else {
        checkedNuberCard(5, 3)
      }
    }
  },[]);

  useEffect(() => {
    window.addEventListener('resize', setTimeoutResize);
    return () => {
      window.removeEventListener('resize', setTimeoutResize);
    }
  })

  let doit;
  function setTimeoutResize() {
    clearTimeout(doit);
    doit = setTimeout(changeWidthWindow, 1000);
  }

  function checkedNuberCard(all, add) {
    props.onAmountMovies(all);
    setAddNumberPerPage(add);
    (props.filtredMovies.length > all) ? setHiddenButton(false) : setHiddenButton(true);
  }

  function changeWidthWindow() {
    if (window.screen.width > 1024) {
      checkedNuberCard(props.amountMovies, 3);
    } else if (window.screen.width > 480) {
      checkedNuberCard(props.amountMovies, 2);
    } else {
      checkedNuberCard(props.amountMovies, 2);
    }
  }

  function addMovies() {
    let numberAllMovieOnPage = addNumberPerPage + props.amountMovies;
    if (numberAllMovieOnPage >= props.filtredMovies.length) {
      setHiddenButton(true);
    }
    props.onAmountMovies(numberAllMovieOnPage);
  }

  return(
    <section className='movies-card-list'>
      <div className='movies-card-list__container container'>
        <ul className={'movies-card-list__grid'}>
          {(props.finallyMoviesApi) ?
            (props.filtredMovies.length) ?
              props.filtredMovies.slice(0, props.amountMovies).map((movie) => (
                <MoviesCard movie={movie} key={movie.id} onSavedMovie={props.onSavedMovie} pageSaveMovies={props.pageSaveMovies} myMovies={props.myMovies} onDeleteMovie={props.onDeleteMovie}/>
              ))
            : <p className="movies-card-list__not-found">{props.errorMoviesApi ?
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                : 'Ничего не найдено'}</p>
          : ''
          }
        </ul>
        <button onClick={addMovies} type='button' className={hiddenButton ? 'movies-card-list__button_hidden' : 'movies-card-list__button'}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
