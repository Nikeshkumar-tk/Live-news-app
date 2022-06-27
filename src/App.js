
import React,{useEffect,useState,} from "react";
import './App.css'
import News from "./News";
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';


const App=()=>{
  
  
  const [news,setNews]=useState([])
  const API_KEY='09e9ed1e072b4f688654e2d48d38bb58';
  const [category,setCategory]=useState('trending')
  const [search,setSearch]=useState('')
  
 
  const fetchNews=(type)=>{
  axios.get(`https://newsapi.org/v2/everything?q=${type}&apiKey=${API_KEY}`).then((response)=>{
        console.log(response.data.articles);
        setNews(response.data.articles)
        
        
    
    })};
    useEffect(()=>{

      fetchNews(category)

          },[category])

  const fetchTypeNews=(category)=>{
          setCategory(category);
         
        }


  return(
    <div className="container">
      <div className="header">
       <div className="btnalign">
        <button className="btn" onClick={()=>fetchTypeNews('trending')}>TRENDING</button>
        
        <button className="btn" onClick={()=>fetchTypeNews('games')}>GAMES</button>
        <button className="btn" onClick={()=>fetchTypeNews('politics')}>POLITICS</button>
        <button className="btn" onClick={()=>fetchTypeNews('nasa')}>NASA</button>
        <button className="btn" onClick={()=>fetchTypeNews('technology')} >TECHNOLOGY</button>
        <button className="btn" onClick={()=>fetchTypeNews('sports')}>SPORTS</button>
        <button className="btn" onClick={()=>fetchTypeNews('entertainment')}>ENTERTAINMENT</button>
        <button className="btn" onClick={()=>fetchTypeNews('movie')}>MOVIE</button>
        <div></div></div> 
        <div className="input">
          
          <input type='text' className="textbox" onChange={(e)=>{setSearch(e.target.value)}} id='search' placeholder="Search news"></input>
          <SearchIcon onClick={()=>fetchNews(search)} className='searchBtn'/></div>
      </div>
      
      <News news={news}/>
     
    </div>
  )
}
export default App;

