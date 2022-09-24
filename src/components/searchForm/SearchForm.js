import { useState, useEffect } from "react";

import FilterCheckbox from "./filterCheckbox/FilterCheckbox";
import {filterMovies} from "../../utils/FilterMovies"

function SearchForm(props) {
  const [moviesName, setMoviesName] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  function handleMoviesName(e) {
    setMoviesName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onMovies();
    props.onPreloader(true);
  }

  useEffect(() => {
    props.onFilterMovies(filterMovies(moviesName, props.allMovies, shortMovies));
  }, [props.allMovies]);

  return(
    <section className='search-form'>
      <div className='search-form__container container'>
        <form onSubmit={handleSubmit} className='search-form__form'>
          <input onChange={handleMoviesName} type='text' className='search-form__input' required></input>
          <button className='search-form__button'></button>
          <FilterCheckbox onShortMovies={setShortMovies}/>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
