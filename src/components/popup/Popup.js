function Popup(props) {


  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button onClick={props.closePopup} className='popup__exit'></button>
        <div className='popup__link-container'>
          <div className='popup__links'>
            <a className='popup__link'>Главная</a>
            <a className='popup__link'>Фильмы</a>
            <a className='popup__link'>Сохранённые фильмы</a>
          </div>
          <button className='popup__button'>Аккаунт</button>
        </div>
      </div>
    </div>
  )
}

export default Popup;
