import FilterCheckbox from "../searchForm/filterCheckbox";

function SearchForm(props) {
  function handleMoviesName(e) {
    props.onMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onMovies();
    props.onPreloader(true);
  }

  return(
    <section className='search-form'>
      <div className='search-form__container container'>
        <form onSubmit={handleSubmit} className='search-form__form'>
          <input onChange={handleMoviesName} name="movieName" type='text' className='search-form__input' required defaultValue={props.moviesName ? props.moviesName : ''}></input>
          <button className='search-form__button'></button>
          <FilterCheckbox onShortMovies={props.onShortMovies} shortMovies={props.shortMovies}/>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
