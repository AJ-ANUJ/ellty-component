import React from 'react';
import './component.css';
import Home from './Home';
import Line from './Line';

const Component = () => {
    const formOptions = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  return (
    <div className='container1'>
        <div className='all-pages-container'>
            <Home key={0} name='All pages' idx={0}></Home>
        </div>
        <Line></Line>
        <div className='home-parent'>
            {formOptions.map( (item, idx) => 
                <Home key={idx} name={item} idx={idx}></Home>
            )}
        </div>
        <Line></Line>
        <div className='btn-container'>
            <button className='done-btn'>Done</button>
        </div>
    </div>
  )
}

export default Component