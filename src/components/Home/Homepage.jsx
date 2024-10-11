import artimage from '../../assets/background1.jpeg'
import Skillset from '../Skillset/Skillset'
import './Home.css'
import Welcome from '../Welcome/Welcome'
import ParallaxImage from '../Welcome/Welcome'
import Projects from '../Projects/Projects'
import More from '../More/More'
import Footer from '../Footer/Footer'
  
  export default function HomePage() {
    return (
        <>
            <Welcome/>
            <Skillset/>
            <Projects/>
            <More/>
            <Footer/>
        </>
    )
  }
  