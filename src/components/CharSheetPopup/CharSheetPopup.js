import React from 'react';

export default function CharSheetPopup(props){
  const strBonus = Math.floor((props.card.strength-10)/2);
  const dexBonus = Math.floor((props.card.dexterity-10)/2);
  const constBonus = Math.floor((props.card.constitution-10)/2);
  const intBonus = Math.floor((props.card.intelligence-10)/2);
  const wisBonus = Math.floor((props.card.wisdom-10)/2);
  const chaBonus = Math.floor((props.card.charisma-10)/2);

  const statRef = React.useRef();
  const damageRef = React.useRef();

  let averageHitDie = 0;
  let bab = 0;
  let chbox=document.getElementById('specialAttack');
  let twoHanded=document.getElementById('specialAttack');

  let fortitudeBonus = 0;
  let reflexBonus = 0;
  let willBonus = 0;
  
  const badSave = Math.floor(props.card.level/3);
  const goodSave = 2 + Math.floor(props.card.level/3);

  let CMB = 0;
  let CMD = 0;

  let acrobaticsBonus = dexBonus+props.card.acrobaticsBonusLevel;
  let bluffBonus = chaBonus+props.card.bluffBonusLevel;
  let craftBonus = intBonus+props.card.craftBonusLevel;
  let disableDeviceBonus = dexBonus+props.card.disableDeviceBonusLevel;
  let escapeArtistBonus = dexBonus+props.card.escapeArtistBonusLevel;
  let handleAnimalBonus = chaBonus+props.card.handleAnimalBonusLevel;
  let intimidateBonus = chaBonus+props.card.intimidateBonusLevel;
  let linguisticsBonus = intBonus+props.card.linguisticsBonusLevel;
  let performBonus = chaBonus+props.card.performBonusLevel;
  let rideBonus = dexBonus+props.card.rideBonusLevel;
  let sleightOfHandBonus = dexBonus+props.card.sleightOfHandBonusLevel;
  let stealthBonus = dexBonus+props.card.stealthBonusLevel;
  let swimBonus = strBonus+props.card.swimBonusLevel;
  let appraiseBonus = intBonus+props.card.appraiseBonusLevel;
  let climbBonus = strBonus+props.card.climbBonusLevel;
  let diplomacyBonus = chaBonus+props.card.diplomacyBonusLevel;
  let disguiseBonus = chaBonus+props.card.disguiseBonusLevel;
  let flyBonus = dexBonus+props.card.flyBonusLevel;
  let healBonus = wisBonus+props.card.healBonusLevel;
  let knowledgeBonus = intBonus+props.card.knowledgeBonusLevel;
  let perceptionBonus = wisBonus+props.card.perceptionBonusLevel;
  let professionBonus = wisBonus+props.card.professionBonusLevel;
  let senseMotiveBonus = wisBonus+props.card.senseMotiveBonusLevel;
  let spellcraftBonus = intBonus+props.card.spellcraftBonusLevel;
  let survivalBonus = wisBonus+props.card.survivalBonusLevel;
  let useMagicDeviceBonus = chaBonus+props.card.useMagicDeviceBonusLevel;

  let isAcrobaticsClassSkill = false;
  let isBluffClassSkill = false;
  let isCraftClassSkill = false;
  let isDisableDeviceClassSkill = false;
  let isEscapeArtistClassSkill = false;
  let isHandleAnimalClassSkill = false;
  let isIntimidateClassSkill = false;
  let isLinguisticsClassSkill = false;
  let isPerformClassSkill = false;
  let isRideClassSkill = false;
  let isSleightOfHandClassSkill = false;
  let isStealthClassSkill = false;
  let isSwimClassSkill = false;
  let isAppraiseClassSkill = false;
  let isClimbClassSkill = false;
  let isDiplomacyClassSkill = false;
  let isDisguiseClassSkill = false;
  let isFlyClassSkill = false;
  let isHealClassSkill = false;
  let isKnowledgeClassSkill = false;
  let isPerceptionClassSkill = false;
  let isProfessionClassSkill = false;
  let isSenseMotiveClassSkill = false;
  let isSpellcraftClassSkill = false;
  let isSurvivalClassSkill = false;
  let isUseMagicDeviceClassSkill = false;

  if (props.card.race === 'Гном' || props.card.race === 'Полурослик'){
    CMB = bab + strBonus - 1;
    CMD = 10 + bab + strBonus + dexBonus - 1;
  } else {
    CMB = bab + strBonus;
    CMD = 10 + bab + strBonus + dexBonus;
  }

  switch (props.card.profession) {
    case 'Бард':
      averageHitDie = 8;
      bab=Math.floor((props.card.level)*3/4);
      fortitudeBonus = badSave;
      reflexBonus = goodSave;
      willBonus = goodSave;
      isAcrobaticsClassSkill = true;
      isBluffClassSkill = true;
      isPerceptionClassSkill = true;
      isDiplomacyClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isEscapeArtistClassSkill = true;
      isPerformClassSkill = true;
      isUseMagicDeviceClassSkill = true;
      isSpellcraftClassSkill = true;
      isClimbClassSkill = true;
      isSleightOfHandClassSkill = true;
      isDisguiseClassSkill = true;
      isAppraiseClassSkill = true;
      isSenseMotiveClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      isStealthClassSkill = true;
      isLinguisticsClassSkill = true; 
      break;
    case 'Варвар':
      averageHitDie = 12;
      bab=props.card.level;
      fortitudeBonus = goodSave;
      reflexBonus = badSave;
      willBonus = badSave;

      isAcrobaticsClassSkill = true;
      isRideClassSkill = true;
      isPerceptionClassSkill = true;
      isSurvivalClassSkill = true;
      isHandleAnimalClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isClimbClassSkill = true;
      isSwimClassSkill = true;
      isCraftClassSkill = true;
      break;
    case 'Воин':
      averageHitDie = 10;
      bab=props.card.level;
      fortitudeBonus = goodSave;
      reflexBonus = badSave;
      willBonus = badSave;

      isSurvivalClassSkill = true;
      isHandleAnimalClassSkill = true;
      isRideClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isClimbClassSkill = true;
      isSwimClassSkill = true;
      isProfessionClassSkill =true;
      isCraftClassSkill = true;
      break;
    case 'Волшебник':
      averageHitDie = 6;
      bab=Math.floor((props.card.level)/2);
      fortitudeBonus = badSave;
      reflexBonus = badSave;
      willBonus = goodSave;

      isKnowledgeClassSkill = true;
      isSpellcraftClassSkill = true;
      isAppraiseClassSkill = true;
      isFlyClassSkill = true;
      isProfessionClassSkill = true
      isCraftClassSkill = true;
      isLinguisticsClassSkill = true;
      break;
    case 'Друид':
      averageHitDie = 8;
      bab=Math.floor((props.card.level)*3/4);
      fortitudeBonus = goodSave;
      reflexBonus = badSave;
      willBonus = goodSave;

      isRideClassSkill = true;
      isPerceptionClassSkill = true;
      isSurvivalClassSkill = true;
      isHandleAnimalClassSkill = true;
      isKnowledgeClassSkill = true;
      isSpellcraftClassSkill = true;
      isClimbClassSkill = true;
      isHealClassSkill = true;
      isSwimClassSkill = true;
      isFlyClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      break;
    case 'Жрец':
      averageHitDie = 8;
      bab=Math.floor((props.card.level)*3/4);
      fortitudeBonus = goodSave;
      reflexBonus = badSave;
      willBonus = badSave;

      isDiplomacyClassSkill = true;
      isKnowledgeClassSkill = true;
      isSpellcraftClassSkill = true;
      isHealClassSkill = true;
      isAppraiseClassSkill = true;
      isSenseMotiveClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      isLinguisticsClassSkill = true;
      break;
    case 'Монах':
      averageHitDie = 8;
      bab=Math.floor((props.card.level)*3/4);
      fortitudeBonus = goodSave;
      reflexBonus = goodSave;
      willBonus = badSave;

      isAcrobaticsClassSkill = true;
      isRideClassSkill = true;
      isPerceptionClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isEscapeArtistClassSkill = true;
      isPerformClassSkill = true;
      isClimbClassSkill = true;
      isSwimClassSkill =true;
      isSenseMotiveClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      isStealthClassSkill = true;
      break;
    case 'Паладин':
      averageHitDie = 10;
      bab=props.card.level;
      if(props.card.level>=2){
        fortitudeBonus = goodSave+chaBonus;
        reflexBonus = badSave+chaBonus;
        willBonus = goodSave+chaBonus;
      } else{
        fortitudeBonus = goodSave;
        reflexBonus = badSave;
        willBonus = goodSave;
      }

      isRideClassSkill = true;
      isDiplomacyClassSkill = true;
      isHandleAnimalClassSkill = true;
      isKnowledgeClassSkill = true;
      isSpellcraftClassSkill = true;
      isHealClassSkill = true;
      isSenseMotiveClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      break;
    case 'Разбойник':
      averageHitDie = 8;
      bab=Math.floor((props.card.level)*3/4);
      fortitudeBonus = badSave;
      reflexBonus = goodSave;
      willBonus = badSave;

      isAcrobaticsClassSkill = true;
      isBluffClassSkill = true;
      isPerceptionClassSkill = true;
      isDiplomacyClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isSleightOfHandClassSkill = true;
      isPerformClassSkill = true;
      isUseMagicDeviceClassSkill = true;
      isClimbClassSkill = true;
      isEscapeArtistClassSkill = true;
      isDisguiseClassSkill = true;
      isDisableDeviceClassSkill = true;
      isAppraiseClassSkill = true;
      isSwimClassSkill = true;
      isSenseMotiveClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      isStealthClassSkill = true;
      isLinguisticsClassSkill = true;
      break;
    case 'Рейнджер':
      averageHitDie = 10;
      bab=props.card.level;
      fortitudeBonus = goodSave;
      reflexBonus = goodSave;
      willBonus = badSave;

      isPerceptionClassSkill = true;
      isSurvivalClassSkill = true;
      isHandleAnimalClassSkill = true;
      isRideClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isSpellcraftClassSkill = true;
      isClimbClassSkill = true;
      isHealClassSkill = true;
      isStealthClassSkill = true;
      isSwimClassSkill = true;
      break;
    case 'Чародей':
      averageHitDie = 6;
      bab=Math.floor((props.card.level)/2);
      fortitudeBonus = badSave;
      reflexBonus = badSave;
      willBonus = goodSave;

      isBluffClassSkill = true;
      isIntimidateClassSkill = true;
      isKnowledgeClassSkill = true;
      isUseMagicDeviceClassSkill = true;
      isSpellcraftClassSkill = true;
      isAppraiseClassSkill = true;
      isFlyClassSkill = true;
      isProfessionClassSkill = true;
      isCraftClassSkill = true;
      break;
    default:
      
  }

  if(isAcrobaticsClassSkill && props.card.acrobaticsBonusLevel>0){
    acrobaticsBonus+=3;
  }
  if(isBluffClassSkill && props.card.bluffBonusLevel>0){
    bluffBonus+=3;
  }
  if(isCraftClassSkill && props.card.craftBonusLevel>0){
    craftBonus+=3;
  }
  if(isDisableDeviceClassSkill && props.card.disableDeviceBonusLevel>0){
    disableDeviceBonus+=3;
  }
  if(isEscapeArtistClassSkill && props.card.escapeArtistBonusLevel>0){
    escapeArtistBonus+=3;
  }
  if(isHandleAnimalClassSkill && props.card.handleAnimalBonusLevel>0){
    handleAnimalBonus+=3;
  }
  if(isIntimidateClassSkill && props.card.intimidateBonusLevel>0){
    intimidateBonus+=3;
  }
  if(isLinguisticsClassSkill && props.card.linguisticsBonusLevel>0){
    linguisticsBonus+=3;
  }
  if(isPerformClassSkill && props.card.performBonusLevel>0){
    performBonus+=3;
  }
  if(isRideClassSkill && props.card.rideBonusLevel>0){
    rideBonus+=3;
  }
  if(isSleightOfHandClassSkill && props.card.sleightOfHandBonusLevel>0){
    sleightOfHandBonus+=3;
  }
  if(isStealthClassSkill && props.card.stealthBonusLevel>0){
    stealthBonus+=3;
  }
  if(isSwimClassSkill && props.card.swimBonusLevel>0){
    swimBonus+=3;
  }
  if(isAppraiseClassSkill && props.card.appraiseBonusLevel>0){
    appraiseBonus+=3;
  }
  if(isClimbClassSkill && props.card.climbBonusLevel>0){
    climbBonus+=3;
  }
  if(isDiplomacyClassSkill && props.card.diplomacyBonusLevel>0){
    diplomacyBonus+=3;
  }
  if(isDisguiseClassSkill && props.card.disguiseBonusLevel>0){
    disguiseBonus+=3;
  }
  if(isFlyClassSkill && props.card.flyBonusLevel>0){
    flyBonus+=3;
  }
  if(isHealClassSkill && props.card.healBonusLevel>0){
    healBonus+=3;
  }
  if(isKnowledgeClassSkill && props.card.knowledgeBonusLevel>0){
    knowledgeBonus+=3;
  }
  if(isPerceptionClassSkill && props.card.perceptionBonusLevel>0){
    perceptionBonus+=3;
  }
  if(isProfessionClassSkill && props.card.professionBonusLevel>0){
    professionBonus+=3;
  }
  if(isSenseMotiveClassSkill && props.card.senseMotiveBonusLevel>0){
    senseMotiveBonus+=3;
  }
  if(isSpellcraftClassSkill && props.card.spellcraftBonusLevel>0){
    spellcraftBonus+=3;
  }
  if(isSurvivalClassSkill && props.card.survivalBonusLevel>0){
    survivalBonus+=3;
  }

  if(isUseMagicDeviceClassSkill && props.card.useMagicDeviceBonusLevel>0){
    useMagicDeviceBonus=useMagicDeviceBonus+3;
  }
  

  const fortitude = fortitudeBonus + constBonus;
  const reflex = reflexBonus + dexBonus;
  const will = willBonus + wisBonus;



  const hp = averageHitDie+constBonus+(constBonus+averageHitDie/2+1)*(props.card.level-1);
  function rollDice(sides){
    return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
  }
  function rollStat(statBonus){
    const roll = rollDice(20);
    const result = roll + statBonus;
    alert('Результат броска '+roll+' Значение бонуса'+statBonus+' Таким образом, итоговый результат '+result)
  }
  function rollAttack(statBonus){
    const roll = rollDice(20);
    let result = roll + statBonus + bab;
    const powerMod = 1 + Math.trunc(bab/4);
    const moddedResult = result - powerMod;
    alert('Результат броска '+roll+' Базовый модификатор атаки ' + bab + ` ${chbox.checked?'Был применен Сокрушительный УДАР! Значение бонуса'+statBonus+'  Значение штрафа от сокрушительного УДАРА! ' +powerMod+'\n\n Таким образом, итоговый результат '+ moddedResult:' Значение бонуса '+statBonus+'\n\n Таким образом, итоговый результат '+result}`)
  }
  function rollDamage(weaponDamage, statBonus){
    const rollDamage = weaponDamage.split('d')
    let roll = 0;
    for (let i = 0; i<rollDamage[0]; i++){
      roll = roll + rollDice(rollDamage[1]);
    }
    let result = 0;
    let powerMod = 0
    if(twoHanded.checked){
      result = roll + parseInt(statBonus);
      powerMod = (1 + Math.trunc(bab/4))*2;
    } else{
      result = roll + Math.floor(parseInt(statBonus)*3/2);
      powerMod = Math.floor((1 + Math.trunc(bab/4))*3/2);
    }
    
    const moddedResult = result + powerMod;
    alert('Результат броска '+roll + ` ${chbox.checked?'Был применен Сокрушительный УДАР! Значение бонуса'+statBonus+'  Значение бонуса от сокрушительного УДАРА! ' +powerMod+'\n\n Таким образом, итоговый результат '+ moddedResult:' Значение бонуса '+statBonus+'\n\n Таким образом, итоговый результат '+result}`)
  }
  function rollSave(saveBonus){
    const roll = rollDice(20);
    const result = roll + saveBonus;
    alert('Результат броска '+roll+' Значение бонуса'+saveBonus+' Таким образом, итоговый результат '+result)
  }
  function rollSkill(skillBonus){
    const roll = rollDice(20);
    const result = roll + skillBonus;
    alert('Результат броска '+roll+' Значение бонуса'+skillBonus+' Таким образом, итоговый результат '+result)
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
              <input className="hp_current" />
            </div>
            <div className="attack">
              <p className="caption bab">Базовый бонус атаки: {bab}</p>
              <div className="check_space">
                <p className="caption">Сокрушительный УДАР</p>
                <input type="checkbox" id="specialAttack" />
              </div>
              <p className="caption">Атакующая харатеристика</p>
              <select ref={statRef} name="lang" className="popup__input character-popup__input_attack" required>
                <option value={strBonus}>Сила</option>
                <option value={dexBonus}>Ловкость</option>
                <option value={intBonus}>Интеллект</option>
                <option value={wisBonus}>Воля</option>
                <option value={chaBonus}>Харизма</option>
              </select>
              <button className="stat_roll" type="button" onClick={() => rollAttack(statRef.current.value)}>Бросить</button>
            </div>
            <div className="damage">
              <p className="caption">Сколько урона наносит твое ковыряло, путник?</p>
              <select ref={damageRef} name="lang" className="popup__input character-popup__input_attack" required>
                <option value={'1d2'}>1d2</option>
                <option value={'1d3'}>1d3</option>
                <option value={'1d4'}>1d4</option>
                <option value={'2d4'}>2d4</option>
                <option value={'1d6'}>1d6</option>
                <option value={'2d6'}>2d6</option>
                <option value={'1d8'}>1d8</option>
                <option value={'1d10'}>1d10</option>
                <option value={'1d12'}>1d12</option>
              </select>
              <div className="check_space">
                <p className="caption">Двуручное</p>
                <input type="checkbox" id="twoHanded" />
              </div>
              <button className="stat_roll" type="button" onClick={() => rollDamage(damageRef.current.value, statRef.current.value)}>Бросить</button>
            </div>

            <div className="savingThrows">
              <div className="save">
                <p className="caption_explain">Стойкость: {fortitude}</p>
                <button className="stat_roll" type="button" onClick={() => rollSave(fortitude)}>Бросить</button>
              </div>
              <div className="save">
                <p className="caption_explain">Реакция: {reflex}</p>
                <button className="stat_roll" type="button" onClick={() => rollSave(reflex)}>Бросить</button>
              </div>
              <div className="save">
                <p className="caption_explain">Воля: {will}</p>
                <button className="stat_roll" type="button" onClick={() => rollSave(will)}>Бросить</button>
              </div>
            </div>
            <div className="combatManeuver">
            <div className="check_space">
              <p className="caption_explain">Бонус боевых манёвров: {CMB}</p>
              <button className="stat_roll" type="button" onClick={() => rollSave(CMB)}>Бросить</button>
            </div>
            <p className="caption_explain">Защита [от] боевых манёвров: {CMD}</p>
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
          <div className="skillBlock">
            <p className='stat'><span className='caption_explain'>Использование магических предметов:</span>{useMagicDeviceBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Выживание:</span>{survivalBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Колдовство:</span>{spellcraftBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Интуиция/проницательность:</span>{senseMotiveBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Профессия:</span>{professionBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Восприятие:</span>{perceptionBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Знания:</span>{knowledgeBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Лечние:</span>{healBonus} <button className="stat_roll" type="button" onClick={() =>rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Полет:</span>{flyBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>МАСКИРОВКА:</span>{disguiseBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Дипломатия:</span>{diplomacyBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Лазанье:</span>{climbBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Оценка:</span>{appraiseBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Плаванье:</span>{swimBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Скрытность:</span>{stealthBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Ловкость рук:</span>{sleightOfHandBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Верховая езда:</span>{rideBonus} <button className="stat_roll" type="button" onClick={() =>rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Выступление:</span>{performBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Лингвистика:</span>{linguisticsBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Запугивание:</span>{intimidateBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Обращение с животными:</span>{handleAnimalBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(handleAnimalBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Изворотливость:</span>{escapeArtistBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(escapeArtistBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Отключение устройств:</span>{disableDeviceBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(disableDeviceBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Ремесло:</span>{craftBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(craftBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Блеф:</span>{bluffBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(bluffBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Акробатика:</span>{acrobaticsBonus} <button className="stat_roll" type="button" onClick={() => rollSkill(acrobaticsBonus)}>Бросить</button></p>          
          </div>
        </div>
        <button className="popup__close charSheetPopup__close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}