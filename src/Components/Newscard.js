import React from 'react'
import Newscardcss from './Newscardcss.css'

const Newscard = ({ newsitem }) => {


  return <div className='card'>

    {/* {console.log(newsitem)} */}

    <img src={newsitem.urlToImage} alt='' ></img>

    <div className='contenet'>
      <span className='title'><b>{newsitem.title}</b></span>
      <span><a href={newsitem.url} target='__blank'>more</a>
        <span><b> written by</b> {newsitem.author? newsitem.author:'unknown'}</span>
      </span>
    </div>

    <div className='descri'>
      <span>{newsitem.description}</span>
    </div>
    <div className='lowertext'>
      <span><b>{newsitem.source.name}</b></span>
    </div>

  </div>

}

export default Newscard