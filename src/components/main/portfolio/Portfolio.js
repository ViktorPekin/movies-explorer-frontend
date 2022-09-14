function Portfolio() {
  return(
    <section className='portfolio'>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Статичный сайт</p>
          <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/how-to-learn'> </a>
        </div>
        <div className='portfolio__border'></div>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Адаптивный сайт</p>
          <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/russian-travel'> </a>
        </div>
        <div className='portfolio__border'></div>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Одностраничное приложение</p>
          <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/ViktorPekin/react-mesto-auth'> </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
