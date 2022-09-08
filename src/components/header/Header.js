import logo from '../../images/logo.svg';

function Header() {
  return(
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt="Логотип"/>
        <div className='header__button-container'>
          <a className='header__registration' href='#'>Регистрация</a>
          <button className='header__login'>Войти</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
