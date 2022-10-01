import { useState, useEffect } from "react";

import MoviesCard from "../moviesCard/MoviesCard";
import { SCREEN_MOBILE, SCREEN_PC, NUMBER_CARD_PC, NUMBER_CARD_TABLET, NUMBER_CARD_MOBILE, NUMBER_ADD_PC, NUMBER_ADD_MOBILE } from "../../utils/constants";

function MoviesCardList(props) {
  const [addNumberPerPage, setAddNumberPerPage] = useState(0);

  const [hiddenButton, setHiddenButton] = useState(true);

  useEffect(() => {
    if (window.screen.width > SCREEN_PC) {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, NUMBER_ADD_PC);
      } else {
        checkedNuberCard(NUMBER_CARD_PC, NUMBER_ADD_PC);
      }
    } else if (window.screen.width > SCREEN_MOBILE) {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, NUMBER_ADD_PC);
      } else {
        checkedNuberCard(NUMBER_CARD_TABLET, NUMBER_ADD_PC);
      }
    } else {
      if (props.amountMovies > 0) {
        checkedNuberCard(props.amountMovies, NUMBER_ADD_PC);
      } else {
        checkedNuberCard(NUMBER_CARD_MOBILE, NUMBER_ADD_PC);
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
    if (JSON.parse(localStorage.getItem('movies-saved-list')) === null) {
      setHiddenButton(true);
    } else {
      (JSON.parse(localStorage.getItem('movies-saved-list')).length > all) ? setHiddenButton(false) : setHiddenButton(true);
    }
  }

  function changeWidthWindow() {
    if (window.screen.width > SCREEN_PC) {
      checkedNuberCard(props.amountMovies, NUMBER_ADD_PC);
    } else if (window.screen.width > SCREEN_MOBILE) {
      checkedNuberCard(props.amountMovies, NUMBER_ADD_MOBILE);
    } else {
      checkedNuberCard(props.amountMovies, NUMBER_ADD_MOBILE);
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
