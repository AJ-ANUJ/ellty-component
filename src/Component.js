import React from 'react';
import './component.css';
import Home from './Home';
import Line from './Line';
import { ClickableProvider } from './ClickableContext';

const Component = () => {
    const formOptions = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  return (
    <ClickableProvider>
        <div className='container1'>
            <div className='all-pages-container'>
                <Home key={0} name='All pages' idx={0}></Home>
            </div>
            <Line></Line>
            <div className='home-parent'>
                {formOptions.map( (item, idx) => 
                    <Home key={idx+1} name={item} idx={idx+1}></Home>
                )}
            </div>
            <Line></Line>
            <div className='btn-container'>
                <button className='done-btn'
                >
                    Done
                </button>
            </div>
        </div>
    </ClickableProvider>
  )
}

export default Component