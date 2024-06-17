import React from 'react'
import './Home.css';
import { useEffect, useRef } from 'react';
import { useClickable } from './ClickableContext';

const Home = (props) => {
    let clickState = 1;
    const { refs, triggerClicks } = useClickable();
    const elementRef = useRef(null);

    useEffect(() => {
        refs.current[props.idx] = elementRef.current;
    }, [props.idx, refs]);

    const mouseleaveCallback = function() {
        this.classList.remove('clicked-style');
        this.classList.add('mouse-moveout-style');
        console.log('clicked-style removed, mouse-movement added');
    };

    const mouseoverCallback = function() {
        this.classList.remove('mouse-moveout-style');
        this.classList.add('clicked-style');
        console.log('mouse-movement addedremoved, clicked-style added');
    }

    const mousedownCallback = function() {
        this.classList.remove('clicked-style');
        this.classList.add('mouse-moveout-style');
        console.log('clicked-style removed, mouse-movement added');
    }

    const mouseupCallback = function() {
        this.classList.remove('mouse-moveout-style');
        this.children[0].classList.remove('tick-persist');
        this.removeEventListener('mouseleave', mouseleaveCallback);
        this.removeEventListener('mouseover', mouseoverCallback);
        this.removeEventListener('mousedown', mousedownCallback);
        this.removeEventListener('mouseup', mouseupCallback);
    }

    const handleClick = (event) => {
        const innerElement = event.target;
        console.log(`innerElement is ${innerElement}`);
        console.log(innerElement);
        const clickedElement = event.currentTarget;
        if((clickState % 2) === 1) {
            console.log(event.currentTarget);
            if(innerElement === clickedElement) {
                clickedElement.children[0].classList.add('tick-persist');
            } else {
                innerElement.classList.add('tick-persist');
            }
            clickedElement.classList.add('clicked-style');
            clickedElement.addEventListener('mouseleave', mouseleaveCallback);
            clickedElement.addEventListener('mouseover', mouseoverCallback);
            clickedElement.addEventListener('mousedown', mousedownCallback);
            clickedElement.addEventListener('mouseup', mouseupCallback);
            clickState += 1
            if(props.idx === 0) {
                triggerClicks();
            }
        } else {
            if(props.idx === 0) {
                triggerClicks();
            }
            if(innerElement === clickedElement) {
                clickedElement.children[0].classList.remove('tick-persist');
            } else {
                innerElement.classList.remove('tick-persist');
            }
            clickedElement.classList.remove('clicked-style');
            clickedElement.removeEventListener('mouseleave', mouseleaveCallback);
            clickedElement.removeEventListener('mouseover', mouseoverCallback);
            clickedElement.removeEventListener('mousedown', mousedownCallback);
            clickedElement.removeEventListener('mouseup', mouseupCallback);
            clickState += 1;
        }
    }

  return (
    <div className='home-container'>
        <span className={props.name === 'All pages' ? 'pg-text-span':'text-span'}>{props.name}</span>
        <div className='desktop-container'>
            <div className='clickable' 
                id={`id-${props.idx}`}
                ref={elementRef}
                onClick={handleClick}
            >
                <span className='tick'></span>
            </div>
        </div>
    </div>
  )
}

export default Home