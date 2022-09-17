function Footer() {
  return(
    <footer className='footer'>
      <div className='footer__container container'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__border'></div>
        <div className='footer__bottom-container'>
          <p className='footer__age'>&#xA9; {new Date().getFullYear()}</p>
          <div className='footer__link-container'>
            <a className='footer__link' target="_blank" rel="noreferrer" href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
            <a className='footer__link' target="_blank" rel="noreferrer" href='https://github.com/'>Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
