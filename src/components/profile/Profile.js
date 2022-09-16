import Header from '../../components/header/Header';

function Profile(props) {
  return(
    <div className='profile'>
      <Header openPopup={props.onOpen}/>
      <main className='profile__container container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__label profile__label_name'>
            <p className='profile__text'>Имя</p>
            <input className='profile__input' type='text' placeholder='Виталий'
            minlength="2" maxLength="30" required></input>
          </div>
          <div className='profile__border'></div>
          <div className='profile__label profile__label_email'>
            <p className='profile__text'>E-mail</p>
            <input className='profile__input' type='email' placeholder='pochta@yandex.ru'
            minlength="2" maxLength="30" required></input>
          </div>
          <button className='profile__form-button'>Редактировать</button>
        </form>
        <button type='button' className='profile__button-exit'>Выйти из аккаунта</button>
      </main>
    </div>
  )
}

export default Profile;
