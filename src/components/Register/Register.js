import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../../utils/castomHooks/useFormWithValidation';
import logo from '../../images/logo.svg';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [valid, setValid] = useState(false);
  const validation = useFormWithValidation();

  useEffect(() => {
    validation.isValid ? setValid(true) : setValid(false);
  }, [validation]);

  const handlePassword = (e) => {
    setPassword(e.target.value);
    validation.handleChange(e);
    props.onErrorServer('');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    validation.handleChange(e);
    props.onErrorServer('');
  }

  function handleName(e) {
    setName(e.target.value);
    validation.handleChange(e);
    props.onErrorServer('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegistration({
      email,
      password,
      name
    });
  }

  return(
    <div className='log-reg'>
      <div className='log-reg__container'>
        <div className='log-reg__logo' src={logo}/>
        <h2 className='log-reg__title'>Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className='log-reg__form'>
          <div className='log-reg__label-container'>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Имя</p>
              <input onChange={handleName} name='name' className='log-reg__input' type='text' minLength="2" maxLength="30" required></input>
              <span className={validation.errors.name ? 'log-reg__input-error_active' : 'log-reg__input-error'}>{validation.errors.name}</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>E-mail</p>
              <input onChange={handleEmail} name='email' className='log-reg__input' type='email' required></input>
              <span className={validation.errors.email ? 'log-reg__input-error_active' : 'log-reg__input-error'}>{validation.errors.email}</span>
            </div>
            <div className='log-reg__label'>
              <p className='log-reg__text'>Пароль</p>
              <input onChange={handlePassword} name='password' className='log-reg__input' type='password' required></input>
              <span className={validation.errors.password ? 'log-reg__input-error_active' : 'log-reg__input-error'}>{validation.errors.password}</span>
            </div>
          </div>
          <div className='log-reg__submit-container'>
            <p className={props.errorServer ? 'log-reg__error_active' : 'log-reg__error'}>{props.errorServer}</p>
            <button className={valid ? 'log-reg__submit' : 'log-reg__submit_disabled'} disabled={!valid}>Зарегистрироваться</button>
          </div>
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
