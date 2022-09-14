import Header from '../../components/header/Header';

function Profile() {
  return(
    <div className='profile'>
      <Header/>
      <div className='profile__container container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__label profile__label_name'>
            <p className='profile__text'>Имя</p>
            <input className='profile__input' type='text' placeholder='Виталий'></input>
          </div>
          <div className='profile__border'></div>
          <div className='profile__label profile__label_email'>
            <p className='profile__text'>E-mail</p>
            <input className='profile__input' type='email' placeholder='pochta@yandex.ru'></input>
          </div>
          <button className='profile__form-button'>Редактировать</button>
        </form>
        <button className='profile__button-exit'>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;
