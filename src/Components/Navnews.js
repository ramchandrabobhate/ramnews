import React from 'react'
import './Navcss.css'
import Hambergurdrawer from './Hambergurdrawer'
import newslogo from '../newslogo.jpeg'
function Navnews({ setCategories }) {
    return (
        <div className='nav'>
            <div className='icon'>
                {/* {console.log(setCategories)} */}
                <Hambergurdrawer setCategories={setCategories} /></div>
            <img style={{cursor:'pointer',height:'80%'}} src={newslogo} alt='News'></img>
        </div>
    )
}

export default Navnews