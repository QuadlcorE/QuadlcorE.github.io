import React from 'react'
import './Artwork.css'
import artimage from './Image1.jpg'

function Artwork() {
    return (
        
       <img src={artimage} className='about' alt='image'/>
        
    )
}

export default Artwork;