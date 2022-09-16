import FilterCheckbox from "./filterCheckbox/FilterCheckbox";

function SearchForm() {
  return(
    <section className='search-form'>
      <div className='search-form__container container'>
        <form className='search-form__form'>
          <input type='text' className='search-form__input' required></input>
          <button className='search-form__button'></button>
          <FilterCheckbox/>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;
