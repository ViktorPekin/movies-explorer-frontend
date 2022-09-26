import photo from '../../../images/photo.jpg'

function AboutMe() {
  return(
    <section className='about-me'>
      <div className='about-me__container container'>
        <h2 className='about-me__title main__title'>Студент</h2>
        <div className='about-me__content'>
          <img className='about-me__photo' src={photo} alt='фото' />
          <div className='abiut-me__info'>
            <h3 className='about-me__name'>Виктор</h3>
            <p className='about-me__subName'>Фронтенд-разработчик, 28 лет</p>
            <p className='about-me__text'>
            Я родился и живу в Новокузнецке. Разработка привлекала еще со школьных времен.
            И только недавно я начал активно двигаться в сторону Front-end.
            Front-end разработка привлекает меня скоростью развития технологий и то что можно сразу наблюдать
            за результатом своей работы. Нравится разбираться в чем то новом для себя. Работал в сфере продаж
            долгое время, поэтому могу найти общий язык с людьми, внимательность и усидчивость также не были лишними.
            Обожаю горные лыжи и сноуборд.
            </p>
            <a className='about-me__github' target="_blank" rel="noreferrer" href="https://github.com/ViktorPekin">Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
