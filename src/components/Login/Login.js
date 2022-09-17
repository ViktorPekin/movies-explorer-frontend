import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.svg';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({
      email,
      password
    })
  }
  return(
    <div className='log-reg'>
      <div className='log-reg__container'>
        <div className='log-reg__logo' src={logo}/>
        <h2 className='log-reg__title'>Рады видеть!</h2>
        <form onSubmit={handleSubmit} className='log-reg__form'>
          <div className='log-reg__label-container'>
            <div className='log-reg__label'>
              <p className='log-reg__text'>E-mail</p>
              <input onChange={handleEmail} className='log-reg__input' type='email' minlength="2" maxLength="30" required></input>
              <span className='log-reg__input-error'>Что-то пошло не так...</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Пароль</p>
              <input onChange={handlePassword} className='log-reg__input' type='password' minlength="2" maxLength="30" required></input>
              <span className='log-reg__input-error_active'>Что-то пошло не так...</span>
            </div>
          </div>
          <button className='log-reg__submit'>Войти</button>
        </form>
        <div className='log-reg__login'>
            <p className='log-reg__login-text'>Ещё не зарегистрированы?</p>
            <Link className='log-reg__login-link' to='/signup'>Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
