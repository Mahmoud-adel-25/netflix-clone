import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCads from '../../Components/TitleCards/TitleCads'
const Home = () => {
  return (
      <div className="Home" > 
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt=""   className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img' />
          <p>discovering hi ties to a secret ancient order , a young man 
            living in modern istanbul embarks on a quest to save the city from an immmortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn' ><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn' ><img src={info_icon} alt="" />more info </button>

          </div>

        </div>
      </div>
      <div className="more-cards">
      <TitleCads />
      <TitleCads title={"blockbuster movies"} category={"top_rated"} />
      <TitleCads title={"only on netflix"} category={"popular"} />
      <TitleCads title={"Upcoming"} category={"upcoming"}  />
      <TitleCads title={"Top pics for You"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
