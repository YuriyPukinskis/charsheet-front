import React from 'react';

export default function ShowRollResult(props){

  return(
    <div className={`rollShower ${props.isOpen?'rollShower_visible':''}`} name="character-popup" title="Результаты броска" isOpen={props.isOpen} onClose={props.onClose} >
      <div className = "rollContainer">
      <p className="rollContent rollHeader">NE JDAL?</p>
      <p className="rollContent">{props.rollText}</p>
      <div class="shape-outer decagon">
        <p className="rollContent rollTarget">{props.rollResult}</p>
      </div>
      <button className="popup__button place-submit" name="place-submit" onClick={()=>props.onClose()} >Оке</button>
      </div>
    </div>    
  )
}