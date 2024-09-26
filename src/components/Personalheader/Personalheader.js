import React from 'react'
import './Personalheader.css'

function Personalheader() {
  return (
    <div className='primary'>
        <header className="primaryheader">
            <a tag="[object Object]" href="#/splash">
                <span ></span>
                <span className='logo' >Osan</span>
                <span ></span>
            </a>
            <label for="menu-btn">
                <span class="navicon"></span>
            </label>
            <ul className="ul_top_headers">
                <li>
                    <a aria-current="page" className="active bubble-btn" tag="[object Object]" href="#/home" >Home</a>
                </li>
                <li>
                    <a className="xp bubble-btn" tag="[object Object]" href="#/experience" >Projects</a>
                </li>
                <li>
                    <a className="bubble-btn projects" tag="[object Object]" href="#/projects" >Projects</a>
                </li>
                <li>
                    <a className="bubble-btn cr" tag="[object Object]" href="#/contact" >Contact and Resume</a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Personalheader