import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useFormWithValidation } from '../../utils/castomHooks/useFormWithValidation';
import Header from '../../components/header/Header';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const validation = useFormWithValidation();

  useEffect(() => {
    validation.isValid ? setValid(true) : setValid(false);
  }, [validation]);

  function handleName(e) {
    setName(e.target.value);
    validation.handleChange(e);
    props.onErrorServer('');
    props.onProfileInfo('');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    validation.handleChange(e);
    props.onErrorServer('');
    props.onProfileInfo('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile({
      name,
      email
    });
    validation.resetForm();
  }

  function signOut(){
    localStorage.removeItem('token');
    props.onSevedMoviesName('');
    props.onSavedShortMovies(false);
    props.onFiltredMovies([]);
    props.onFinallyMoviesApi(false);
    props.onLogin(false);
    navigate('/');
  }

  return(
    <div className='profile'>
      <Header openPopup={props.onOpen}/>
      <main className='profile__container container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form onSubmit={handleSubmit} className='profile__form'>
          <div className='profile__label-contaioner'>
            <div className='profile__label profile__label_name'>
              <p className='profile__text'>Имя</p>
              <input onChange={handleName} name='name' className='profile__input' type='text' placeholder={currentUser.name}
              minLength="2" maxLength="30" required></input>
            </div>
            <span className={validation.errors.name ? 'profile__input-error_active' : 'profile__input-error'}>{validation.errors.name}</span>
            <div className='profile__border'></div>
            <div className='profile__label profile__label_email'>
              <p className='profile__text'>E-mail</p>
              <input onChange={handleEmail} name='email' className='profile__input' type='email' placeholder={currentUser.email} required></input>
            </div>
            <span className={validation.errors.name ? 'profile__input-error_active' : 'profile__input-error'}>{validation.errors.email}</span>
          </div>
          <div className='profile__submit-container'>
            <p className={props.errorServer ? 'profile__error_active' : 'profile__error'}>{props.errorServer}</p>
            <p className={props.profileInfo ? 'profile__info_active' : 'profile__info'}>{props.profileInfo}</p>
            <button className={valid ? 'profile__form-button' : 'profile__form-button_disabled'} disabled={!valid}>Редактировать</button>
          </div>

        </form>
        <button onClick={signOut} type='button' className='profile__button-exit'>Выйти из аккаунта</button>
      </main>
    </div>
  )
}

export default Profile;
