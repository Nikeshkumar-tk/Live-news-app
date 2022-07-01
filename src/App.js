
import React,{useEffect,useState,} from "react";
import './App.css'
import News from "./News";
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import Loading from "./Loading";


const App=()=>{
  
  
  const [news,setNews]=useState([])
  const politics='politics'
  
const[loading,setLoading]=useState(true)
  const [search,setSearch]=useState('trending')
  
 
 
    const fetchNewsByKey=async(type)=>{
      setLoading(true)
      await axios({method:'GET',
              url:`https://bing-news-search1.p.rapidapi.com/news/search`,
              params: {safeSearch: 'Off', textFormat: 'Raw',originalImg:'true',q:`${type}`,Count:32},
              headers: {
                
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '39917aa29amshb5bebf0758c9345p197919jsn308218859cd1',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
              }}).then((response)=>{
                 console.log(response.data.value);
                  setNews(response.data.value)
            
            setLoading(false)
        
        })};
    
    useEffect(()=>{

      fetchNewsByKey(politics)

          },[])

  


  return(
    <div className="container">
      <div className="header">
       <div className="btnalign">
        <button className="btn" onClick={()=>fetchNewsByKey('trending')}>TRENDING</button>
        
        <button className="btn" onClick={()=>fetchNewsByKey('games')}>GAMES</button>
        <button className="btn" onClick={()=>fetchNewsByKey('politics')}>POLITICS</button>
        <button className="btn" onClick={()=>fetchNewsByKey('sports')}>SPORTS</button>
        <button className="btn" onClick={()=>fetchNewsByKey('technology')} >TECHNOLOGY</button>
        
        <div></div></div> 
        <div className="input">
          
          <input type='text' className="textbox" onChange={(e)=>{setSearch(e.target.value)}} id='search' placeholder="Search news"></input>
          <SearchIcon onClick={()=>fetchNewsByKey(search)} className='searchBtn'/></div>
      </div>
      
      {loading?<Loading />:<News news={news}/>}
     
    </div>
  )
}
export default App;

