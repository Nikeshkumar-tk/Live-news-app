import React from 'react'
import './App.css'
import Newsdisplay from './Newsdisplay';



      const News = ({news}) => {
   
    
    
   
      return (
          <div className='footer'>{news.map((data)=>{
          const {author,title,content,urlToImage,url,description}=data;
           return(
      

                 <Newsdisplay author={author} content={content} title={title} image={urlToImage} url={url} description={description}/>
     
                 )
    
            })}
            </div>
  
)};

export default News;