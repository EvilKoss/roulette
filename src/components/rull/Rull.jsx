import React from 'react';
import style from './rull.module.css';
import koleso from '../pictures/rull.png';
import ball from '../pictures/ball_small.png';
import {useEffect} from 'react';

const Rull = (props) => {
  let spin = props.roll;
  let changeSpin = props.changeSpin;
  let changeBet = props.changeBet;
  let rotation = props.rotation;
  let i = props.i;

  useEffect(() => {
    let timer = setInterval(() => {
      spin();
    }, 10);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <img className={style.rull} src={koleso} style={{transform: `rotate(${rotation}turn)`}}/>
      <img className={style.rull} src={ball} style={{transform: `rotate(${-rotation}turn)`}}/>
      <div className={style.butt}>
        <button onClick={changeSpin}>roll</button>
        <button>spin</button><br/>
        <button onClick={()=>changeBet(1)}>1</button>
        <button onClick={()=>changeBet(5)}>5</button>
        <button onClick={()=>changeBet(25)}>25</button>
        <button onClick={()=>changeBet(100)}>100</button>
      </div>
    </div>
  )
}

export default Rull;
