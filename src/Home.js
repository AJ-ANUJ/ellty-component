import React from 'react'
import './Home.css';

const Home = (props) => {
    let clickState = 1;

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
        this.children[0].addEventListener('mouseleave', function() {
            this.classList.add('tick-remove');
        });
        this.removeEventListener('mouseleave', mouseleaveCallback);
        this.removeEventListener('mouseover', mouseoverCallback);
        this.removeEventListener('mousedown', mousedownCallback);
        this.removeEventListener('mouseup', mouseupCallback);
    }

    const handleClick = (event) => {
        const innerElement = event.target;
        const clickedElement = event.currentTarget;
        if((clickState % 2) === 1) {
            console.log(event.currentTarget);
            innerElement.classList.add('tick-persist');
            clickedElement.classList.add('clicked-style');
            clickedElement.addEventListener('mouseleave', mouseleaveCallback);
            clickedElement.addEventListener('mouseover', mouseoverCallback);
            clickedElement.addEventListener('mousedown', mousedownCallback);
            clickedElement.addEventListener('mouseup', mouseupCallback);
            clickState += 1
        } else {
            clickState += 1;
        }
    }
  return (
    <div className='home-container'>
        <span className={props.name === 'All pages' ? 'pg-text-span':'text-span'}>{props.name}</span>
        <div className='desktop-container'>
            <div className='clickable' onClick={handleClick}>
                <span className='tick'></span>
            </div>
        </div>
    </div>
  )
}

export default Home



// function() {
//     // this.classList.remove('mouse-moveout-style');
//     // console.log('mouse-movement removed');
//     // this.removeEventListener('mouseleave', mouseleaveCallback);
//     // console.log('mouseleave event listener removed');
//     // this.removeEventListener('mouseover', mouseoverCallback);
//     // console.log('mouseover event listener removed');
//     // this.removeEventListener('mousedown', mousedownCallback);
//     // console.log('mousedown event listener removed');
// }