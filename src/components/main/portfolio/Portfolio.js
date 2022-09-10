import link from '../../../images/text__COLOR_font-main.svg';

function Portfolio() {
  return(
    <section className='portfolio'>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Статичный сайт</p>
          <a className='portfolio__link' href='https://github.com/ViktorPekin/how-to-learn'>
            <img className='portfolio__link-img' src={link} alt='Статичный сайт'/>
          </a>
        </div>
        <div className='portfolio__border'></div>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Адаптивный сайт</p>
          <a className='portfolio__link' href='https://github.com/ViktorPekin/russian-travel'>
            <img className='portfolio__link-img' src={link} alt='Адаптивный сайт'/>
          </a>
        </div>
        <div className='portfolio__border'></div>
        <div className='portfolio__link-container'>
          <p className='portfolio__link-text'>Одностраничное приложение</p>
          <a className='portfolio__link' href='https://github.com/ViktorPekin/react-mesto-auth'>
            <img className='portfolio__link-img' src={link} alt='Одностраничное приложение'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
