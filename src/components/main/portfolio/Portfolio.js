function Portfolio() {
  return(
    <section className='portfolio'>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__links'>
          <li className='portfolio__link-container'>
            <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/how-to-learn'>
              <p className='portfolio__link-text'>Статичный сайт</p>
              <div className='portfolio__link-icon'></div>
            </a>
          </li>
          <li className='portfolio__link-container'>
            <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/russian-travel'>
              <p className='portfolio__link-text'>Адаптивный сайт</p>
              <div className='portfolio__link-icon'></div>
            </a>
          </li>
          <li className='portfolio__link-container'>
            <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/react-mesto-auth'>
              <p className='portfolio__link-text'>Одностраничное приложение</p>
              <div className='portfolio__link-icon'></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
