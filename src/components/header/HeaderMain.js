import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function HeaderMain(props) {
  return(
    <header className='header-main'>
      <div className='header-main__container container'>
        <Link to='/'><img className='header-main__logo' src={logo} alt="Логотип"/></Link>;
        <nav className='header-main__button-container'>
          <Link className='header-main__registration' to='/signup'>Регистрация</Link>
          <Link className='header-main__login' to='signin'>Войти</Link>
        </nav>
      </div>
    </header>
  )
}

export default HeaderMain;
