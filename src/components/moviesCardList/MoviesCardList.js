import { useState, useEffect } from "react";
import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList(props) {
  const [addNumberPerPage, setAddNumberPerPage] = useState(0);
  const [amountMovies, setAmountMovies] = useState(0);
  const [hiddenButton, setHiddenButton] = useState(true);


  useEffect(() => {
    checkWidthWindow();
    console.log(amountMovies);
    (props.filtredMovies.length > amountMovies) ? setHiddenButton(false) : setHiddenButton(true);
  },[props.filtredMovies.length]);

  let doit;
  window.addEventListener('resize', function() {
    clearTimeout(doit);
    doit = setTimeout(changeWidthWindow, 1000);
  });

  function checkWidthWindow() {
    if (window.screen.width > 1024) {
      setAmountMovies(12);
      setAddNumberPerPage(3);
    } else if (window.screen.width > 480) {
      setAmountMovies(8);
      setAddNumberPerPage(2);
    } else {
      setAmountMovies(5);
      setAddNumberPerPage(2);
    }
  }

  function changeWidthWindow() {
    if (window.screen.width > 1024) {
      setAmountMovies(amountMovies);
      setAddNumberPerPage(3);
    } else if (window.screen.width > 480) {
      setAmountMovies(amountMovies);
      setAddNumberPerPage(2);
    } else {
      setAmountMovies(amountMovies);
      setAddNumberPerPage(2);
    }
  }

  function addMovies() {
    let numberAllMovieOnPage = addNumberPerPage + amountMovies;
    if (numberAllMovieOnPage >= props.filtredMovies.length) {
      setHiddenButton(true);
    }
    setAmountMovies(numberAllMovieOnPage);
  }

  return(
    <section className='movies-card-list'>
      <div className='movies-card-list__container container'>
        <ul className={props.savedMovies ? 'movies-card-list__grid_button_margin' : 'movies-card-list__grid'}>
          {(props.finallyMoviesApi) ?
            (props.filtredMovies.length) ?
              props.filtredMovies.slice(0, amountMovies).map((movie) => (
                <MoviesCard movie={movie} key={movie.id} savedMovies={props.savedMovies ? true : false}/>
              ))
            : <p className="movies-card-list__not-found">{props.errorMoviesApi ?
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                : 'Ничего не найдено'}</p>
          : ''
          }
        </ul>
        <button onClick={addMovies} type='button' className={props.savedMovies || hiddenButton ? 'movies-card-list__button_hidden' : 'movies-card-list__button'}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
