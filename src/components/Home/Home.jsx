import artimage from '../../assets/background1.jpeg'
import Skillset from './Skillset'
import './Home.css'
import Welcome from './Welcome'
import ParallaxImage from './Welcome'
import Projects from './projects'
  
  export default function Home() {
    return (
        <>
            <Welcome/>
            <Skillset/>
            <Projects/>
        </>
    )
  }
  