import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header(props) {
  return(
    <header className='header'>
      <div className='header__container container'>
        <div className='header__link-container'>
          <img className='header__logo' src={logo} alt="Логотип"/>
          <nav className='header__links'>
            <NavLink to='/movies'
            className={( { isActive }) => isActive ? 'header__link_active' : 'header__link'}>Фильмы</NavLink>
            <NavLink to='/saved-movies'
            className={( { isActive }) => isActive ? 'header__link_active' : 'header__link'}>Сохранённые фильмы</NavLink>
          </nav>
        </div>
        <Link className='header__account' to='/profile'>Аккаунт</Link>
        <button type='button' onClick={props.openPopup} className='header__burger'></button>
      </div>
    </header>
  )
}

export default Header;
