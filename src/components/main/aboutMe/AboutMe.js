import photo from '../../../images/pic__COLOR_pic.png'

function AboutMe() {
  return(
    <section className='about-me'>
      <div className='about-me__container container'>
        <h2 className='about-me__title main__title'>Студент</h2>
        <div className='about-me__content'>
          <img className='about-me__photo' src={photo} alt='фото' />
          <div className='abiut-me__info'>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__subName'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='about-me__github' target="_blank" rel="noreferrer" href="https://github.com/ViktorPekin">Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
