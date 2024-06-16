import React from 'react'
import './Home.css';

const Home = (props) => {
  return (
    <div className='home-container'>
        <span>{props.name}</span>
        <div className='desktop-container'>
            <label key={props.idx}>
                <input name='radio' type='radio' id={props.idx}></input>
                <span></span>
            </label>
        </div>
    </div>
  )
}

export default Home