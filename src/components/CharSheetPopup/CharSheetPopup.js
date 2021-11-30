import React from 'react';

export default function CharSheetPopup(props){
  const strBonus = Math.floor((props.card.strength-10)/2);
  const dexBonus = Math.floor((props.card.dexterity-10)/2);
  const constBonus = Math.floor((props.card.constitution-10)/2);
  const intBonus = Math.floor((props.card.intelligence-10)/2);
  const wisBonus = Math.floor((props.card.wisdom-10)/2);
  const chaBonus = Math.floor((props.card.charisma-10)/2);

  let averageHitDie = 0;
  

  switch (props.card.profession) {
    case 'Бард':
      averageHitDie = 8;
      break;
    case 'Варвар':
      averageHitDie = 12;
      break;
    case 'Воин':
      averageHitDie = 10;
      break;
    case 'Волшебник':
      averageHitDie = 6;
      break;
    case 'Друид':
      averageHitDie = 8;
      break;
    case 'Жрец':
      averageHitDie = 8;
      break;
    case 'Монах':
      averageHitDie = 8;
      break;
    case 'Паладин':
      averageHitDie = 10;
      break;
    case 'Разбойник':
      averageHitDie = 8;
      break;
    case 'Рейнджер':
      averageHitDie = 10;
      break;
    case 'Чародей':
      averageHitDie = 6;
      break;
    default:
      alert( "А ты чего за покемон?" );
  }

  const hp = (constBonus+averageHitDie)*props.card.level;
  function rollStat(statBonus){
    const roll = Math.floor(Math.random() * 20);
    const result = roll + statBonus;
    alert('Результат броска '+roll+' Значение бонуса'+statBonus+' Таким образом, итоговый результат '+result)
  }
  return(
    <div className={`popup charSheetPopup ${props.isBigImageOpen?'popup_visible':''}`}>
      <div className="charSheetPopup__container">
        <img className="charSheetPopup__img" alt="Изображение" src={props.card.link} />
        <div className="captionField">
          <div className="caption"><span className='caption_explain'>Имя:</span> {props.card.name}</div>
          <div className="caption"><span className='caption_explain'>Расса:</span> {props.card.race}</div>
          <div className="caption"><span className='caption_explain'>Класс:</span> {props.card.profession}</div>
          <div className="static_characteristics">
            <div className="caption"><span className='caption_explain'>Уровень:</span> {props.card.level}</div>
            <div className="hp">
              <p className = "caption caption_explain">Общее количество здоровья: </p>
              <p className="hp_total">{hp}</p>
              <p className = "caption caption_explain">Текущее количество здоровья: </p>
              <input className="hp_current" value='fff'/>
            </div>
          </div>
          <div className="statblock">
            <p className='stat'><span className='caption_explain'>Сила:</span>{props.card.strength} <span className='caption_explain'>Бонус силы:</span> <span className='stat_bonus'>{strBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Ловкость:</span>{props.card.dexterity} <span className='caption_explain'>Бонус ловкости:</span> <span className='stat_bonus'>{dexBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(dexBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Выносливость:</span>{props.card.constitution} <span className='caption_explain'>Бонус выносливости:</span> <span className='stat_bonus'>{constBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(constBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Интеллект:</span>{props.card.intelligence} <span className='caption_explain'>Бонус интеллекта:</span> <span className='stat_bonus'>{intBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(intBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Мудрость:</span>{props.card.wisdom} <span className='caption_explain'>Бонус мудрости:</span> <span className='stat_bonus'>{wisBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(wisBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Харизма:</span>{props.card.charisma} <span className='caption_explain'>Бонус харизмы:</span> <span className='stat_bonus'>{chaBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(chaBonus)}>Бросить</button></p>
          </div>
        </div>
        <button className="popup__close charSheetPopup__close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}