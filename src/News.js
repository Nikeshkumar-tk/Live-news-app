import React from 'react'
import './App.css'
import Newsdisplay from './Newsdisplay';



const News = ({news}) => {
   
    
    
   
  return (<div className='footer'>{news.map((data)=>{
    const {author,title,source,content,urlToImage,url,description}=data;
   return(
      // <div className='news'>
      //   <h4>{author}</h4>
      //   <h4>{title}</h4>
      //   <h4>{content}</h4>
       

      // </div>

      <Newsdisplay author={author} content={content} title={title} image={urlToImage} url={url} description={description}/>
     
   )
    
  })}</div>
  
)};

export default News;