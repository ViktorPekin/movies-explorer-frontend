import logo from '../../images/logo.svg';

function HeaderMain(props) {
  return(
    <header className='header-main'>
      <div className='header-main__container container'>
        <img className='header-main__logo' src={logo} alt="Логотип"/>
        <div className='header-main__button-container'>
          <a className='header-main__registration' href='#'>Регистрация</a>
          <button className='header-main__login'>Войти</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderMain;
