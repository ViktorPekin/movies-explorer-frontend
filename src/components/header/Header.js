import logo from '../../images/logo.svg';

function Header(props) {
  return(
    <header className='header'>
      <div className='header__container container'>
        <div className='header__link-container'>
          <img className='header__logo' src={logo} alt="Логотип"/>
          <a className='header__link' href='#'>Фильмы</a>
          <a className='header__link' href='#'>Сохранённые фильмы</a>
        </div>
        <button className='header__account'>Аккаунт</button>
        <button onClick={props.openPopup} className='header__burger'></button>
      </div>
    </header>
  )
}

export default Header;
