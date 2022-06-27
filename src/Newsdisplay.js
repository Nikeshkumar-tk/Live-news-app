import React from 'react'
import './App.css'

const Newsdisplay = ({name,content,title,image,url,description}) => {

  return (
        <a href={url}>
        <div className='news'>
        <img src={image} className='image' alt='unable to load'></img>
    
         <h4 className='newstitle'> {title}</h4>
         <h4 className='newscontent'>{description}Click to Read more</h4> 
        
        </div>
        </a>
        )
}

export default Newsdisplay