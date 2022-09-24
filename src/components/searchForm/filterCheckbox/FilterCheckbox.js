function FilterCheckbox(props) {

  function handleCheckbox(e) {
    props.onShortMovies(e.target.checked);
  }

  return(
    <section className='filter-checkbox'>
      <div className='filter-checkbox__container'>
        <label className='filter-checkbox__switch'>
          <input onChange={handleCheckbox} type='checkbox' className='filter-checkbox__checkbox'/>
          <span className='filter-checkbox__slider'></span>
        </label>
        <p className='filter-checkbox__text'>Короткометражки</p>
      </div>
    </section>
  )
}

export default FilterCheckbox;
