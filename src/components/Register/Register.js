import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return(
    <div className='log-reg'>
      <div className='log-reg__container'>
        <div className='log-reg__logo' src={logo}/>
        <h2 className='log-reg__title'>Добро пожаловать!</h2>
        <form className='log-reg__form'>
          <div className='log-reg__label-container'>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Имя</p>
              <input className='log-reg__input' type='text' minlength="2" maxLength="30" required></input>
              <span className='log-reg__input-error'>Что-то пошло не так...</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>E-mail</p>
              <input className='log-reg__input' type='email' minlength="2" maxLength="30" required></input>
              <span className='log-reg__input-error'>Что-то пошло не так...</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Пароль</p>
              <input className='log-reg__input' type='password' minlength="2" maxLength="30" required></input>
              <span className='log-reg__input-error_active'>Что-то пошло не так...</span>
            </div>
          </div>
          <button className='log-reg__submit'>Зарегистрироваться</button>
        </form>
        <div className='log-reg__login'>
            <p className='log-reg__login-text'>Уже зарегистрированы?</p>
            <Link className='log-reg__login-link' to='/signin'>Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;
