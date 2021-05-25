import React from 'react';
import style from './Present.module.css';

const Present = (props) => {
  let betNumber = props.betNumber;
  let str = [];
  let bool = false;
  for(let i = 1; i < 37; i++) {
    let colorR = bool ? style.numbersB : style.numbersR;

    if (i != 10 && i != 18 && i != 28) {
      bool = !bool;
    }
    str.push(<button onClick={()=>betNumber(i)} className={colorR}>{i}</button>)
  }
  return (
    <div className={style.table}>
      <div className={style.tableOfNumbers}>
        <button disabled="disabled" className={style.numbersGn}></button>
        <button onClick={()=>betNumber(0)} className={style.numbersG}>0</button>
        <button disabled="disabled" className={style.numbersGn}></button>
        {str}
      </div>
    </div>
  )
}

export default Present;
