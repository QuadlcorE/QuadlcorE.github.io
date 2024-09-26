import React from 'react'
import './Home.css'
import AboutText from '../About/About';
import Artwork from '../About/Artwork';

function Home() {
  return (
    <div class="react-reveal greet-main" id="greeting" >
        <div class="greeting-main">
            <div class="greeting-text-div flex-item">
                <AboutText/>
                {/* <div className='greeting-image-div'> */}
                {/* </div> */}
            </div>
            <div className='flex-item'>
                <Artwork/>
            </div>
        </div>
    </div>
  )
}

export default Home;