import { useNavigate } from "react-router-dom";

function NotFound() {
  const history = useNavigate();
  return(
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__sub-title'>Страница не найдена</p>
      <button className='not-found__link' onClick={() => history(-1)}>Назад</button>
    </div>
  )
}

export default NotFound;
