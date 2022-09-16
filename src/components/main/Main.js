import Promo from './promo/Promo';
import AboutProject from './aboutProject/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import HeaderMain from '../header/HeaderMain';
import Footer from '../footer/Footer';

function Main() {
  return(
    <div className='main'>
      <HeaderMain/>
      <main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  )
}

export default Main;
