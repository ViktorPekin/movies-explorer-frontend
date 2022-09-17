import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import Header from '../../components/header/Header';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile({
      name,
      email
    });
  }

  function signOut(){
    localStorage.removeItem('token');
  }

  return(
    <div className='profile'>
      <Header openPopup={props.onOpen}/>
      <main className='profile__container container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form onSubmit={handleSubmit} className='profile__form'>
          <div className='profile__label profile__label_name'>
            <p className='profile__text'>Имя</p>
            <input onChange={handleName} className='profile__input' type='text' placeholder={currentUser.name}
            minlength="2" maxLength="30" required></input>
          </div>
          <div className='profile__border'></div>
          <div className='profile__label profile__label_email'>
            <p className='profile__text'>E-mail</p>
            <input onChange={handleEmail} className='profile__input' type='email' placeholder={currentUser.email}
            minlength="2" maxLength="30" required></input>
          </div>
          <button className='profile__form-button'>Редактировать</button>
        </form>
        <button onClick={signOut} type='button' className='profile__button-exit'>Выйти из аккаунта</button>
      </main>
    </div>
  )
}

export default Profile;
