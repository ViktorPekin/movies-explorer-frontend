function FilterCheckbox() {
  return(
    <section className='filter-checkbox'>
      <div className='filter-checkbox__container'>
        <label className='filter-checkbox__switch'>
          <input type='checkbox' className='filter-checkbox__checkbox'/>
          <span className='filter-checkbox__slider'></span>
        </label>
        <p className='filter-checkbox__text'>Короткометражки</p>
      </div>
    </section>
  )
}

export default FilterCheckbox;