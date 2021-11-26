import React from 'react';

export default function InfoToolTip(props){
  return(
    <div className={`popup image-popup ${props.isInfoToolTipOpen?'popup_visible':''}`}>
      <div className="info-popup__container">
        <img className="info-popup__img" alt="Изображение" src={props.img} />
        <div className="info-popup__caption">{props.text}</div>
        <button className="popup__close info-popup__close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}