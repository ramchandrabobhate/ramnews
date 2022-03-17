import { useEffect, useState } from "react";
import Navnews from "./Components/Navnews";
import Newscontent from "./NewsCompenent/Newscontent";

import axios from "axios";

function App() {
  const [categories, setCategories] = useState('General')
  const [newsArr, setNewsArr] = useState([])
  const [newsResult, setnewsresult] = useState([])

  
  const NewsData = async () => {
    try {
      // const proxy='https://cors-anywhere.herokuapp.com/';
     // const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`)
     
       const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`)
        console.log(news.data);
      setNewsArr(news.data.articles)
      setnewsresult(news.data.totalResults)
    } catch (error) {

    }
  }
  
  useEffect(() => {
    NewsData()// eslint-disable-next-line


  }, [newsResult, categories])

  return (
    <div>
      <Navnews setCategories={setCategories} />
      <Newscontent newsArr={newsArr} newsResult={newsResult}></Newscontent>
    </div>
  );
}

export default App;
