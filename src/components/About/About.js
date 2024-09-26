import React from 'react'
import '../Home/Home.css'

function AboutText() {
    return ( 
        <div>
            <h1 class="greeting-text">Hello 👋.</h1>
            <p class="greeting-text-p subTitle" >
                <span>I'm </span>
                <span >Ogbemi Aaron. </span>Backend Developer. Always learning.
            </p>
            <div class="social-media-div">
                <a href="https://github.com/harikanani" class="icon-button github" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                    <span></span>
                </a>
                <a href="https://www.linkedin.com/in/harikrushn-kanani/" class="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
                    <span></span>
                </a>
                <a href="https://twitter.com/Harikrushn9" class="icon-button twitter" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                    <span></span>
                </a>
            </div>
        </div>
    )
}

export default AboutText;