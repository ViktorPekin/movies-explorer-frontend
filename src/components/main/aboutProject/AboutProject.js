function AboutProject() {
  return (
    <section className='about-progect'>
      <div className='about-progect__container'>
        <h2 className='about-progect__title'>О проекте</h2>
        <div className='about-progect__border'></div>
        <div className='about-progect__info'>
          <div className='about-progect__stages'>
            <h3 className='about-progect__stages-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-progect__stages-subtitle'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-progect__dedline'>
            <h3 className='about-progect__dedline-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-progect__dedline-subtitle'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-progect__block'>
          <p className='about-progect__block-one-week'>1 неделя</p>
          <p className='about-progect__block-four-week'>4 недели</p>
        </div>
        <div className='about-progect__sub-block'>
          <p className='about-progect__backend'>Back-end</p>
          <p className='about-progect__frontend'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
