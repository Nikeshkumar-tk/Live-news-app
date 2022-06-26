
import React,{useEffect,useState} from "react";
import './App.css'
import News from "./News";
import axios from 'axios'

const App=()=>{
  
  const [type,setType]=useState('top')
  const [news,setNews]=useState([])
  const API_KEY='0429d6095aaf45cda27afe30d0e9f361';
  const [category,setCategory]=useState('trending')
  // const options = {
  //   method: 'GET',
  //   url: 'https://bing-news-search1.p.rapidapi.com/news',
  //   params: {safeSearch: 'Off', textFormat: 'Raw'},
  //   headers: {
  //     'X-BingApis-SDK': 'true',
  //     'X-RapidAPI-Key': '39917aa29amshb5bebf0758c9345p197919jsn308218859cd1',
  //     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  //   }
  // };
 
  const fetchNews=(type)=>{
    axios.get(`https://newsapi.org/v2/everything?q=${type}&apiKey=${API_KEY}`).then((response)=>{
        console.log(response.data.articles);
        setNews(response.data.articles)
        console.log(news);
        
    
    })}
    useEffect(()=>{
      fetchNews(category)
  },[])

  const fetchTypeNews=(category)=>{
setCategory(category);
fetchNews(category);
  }


  return(
    <div className="container">
      <div className="header">
        <button className="btn">TRENDING</button>
        <button className="btn" onClick={()=>fetchTypeNews('technology')}>TECHNOLOGY</button>
        <button className="btn" onClick={()=>fetchTypeNews('sports')}>SPORTS</button>
        <button className="btn" onClick={()=>fetchTypeNews('entertainment')}>ENTERTAINMENT</button>
        <button className="btn" onClick={()=>fetchTypeNews('movie')}>MOVIE</button>
      </div>
      {/* <div className="footer"> */}
      <News news={news}/>
      {/* </div> */}
    </div>
  )
}
export default App;

