import { NavLink } from "react-router-dom";

function Popup(props) {
  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button onClick={props.closePopup} className='popup__exit'></button>
        <div className='popup__link-container'>
          <nav className='popup__links'>
            <p className='popup__link'>Главная</p>
            <NavLink className={( { isActive }) => isActive ? 'popup__link_active' : 'popup__link'} to='/movies'>
              Фильмы
            </NavLink>
            <NavLink className={( { isActive }) => isActive ? 'popup__link_active' : 'popup__link'} to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <button className='popup__button'>Аккаунт</button>
        </div>
      </div>
    </div>
  )
}

export default Popup;
