import logo from '../../images/logo.svg';

function Login() {
  return(
    <div className='log-reg'>
      <div className='log-reg__container'>
        <div className='log-reg__logo' src={logo}/>
        <h2 className='log-reg__title'>Рады видеть!</h2>
        <form className='log-reg__form'>
          <div className='log-reg__label-container'>
            <div className='log-reg__label'>
              <p className='log-reg__text'>E-mail</p>
              <input className='log-reg__input' type='email'></input>
              <span className='log-reg__input-error'>Что-то пошло не так...</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Пароль</p>
              <input className='log-reg__input' type='password'></input>
              <span className='log-reg__input-error_active'>Что-то пошло не так...</span>
            </div>
          </div>
          <button className='log-reg__submit'>Войти</button>
        </form>
        <div className='log-reg__login'>
            <p className='log-reg__login-text'>Ещё не зарегистрированы?</p>
            <a className='log-reg__login-link' href='#'>Регистрация</a>
        </div>
      </div>
    </div>
  )
}

export default Login;