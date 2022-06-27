import React from 'react'
import './App.css'
import Newsdisplay from './Newsdisplay';



      const News = ({news}) => {
   
    
    
   
      return (
          <div className='footer'>{news.map((data)=>{
          const {name,title,content,image,url,description}=data;
           return(
      

                 <Newsdisplay name={name} content={content} title={title} image={image?.contentUrl} url={url} description={description}/>
     
                 )
    
            })}
            </div>
  
)};

export default News;