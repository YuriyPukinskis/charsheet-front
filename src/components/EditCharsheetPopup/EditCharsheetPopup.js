import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function EditCharsheetPopup(props){
  const [name,setName] = useState();
  const [url,setUrl] = useState();

  const [race,setRace] = useState();
  const [profession,setProfession] = useState();
  const [level,setLevel] = useState();

  const [strength,setStrength] = useState();
  const [dexterity,setDexterity] = useState();
  const [constitution,setConstitution] = useState();
  const [intelligence,setIntelligence] = useState();
  const [wisdom,setWisdom] = useState();
  const [charisma,setCharisma] = useState();
  
  const nameRef2 = React.useRef();
  const urlRef2 = React.useRef();

  const raceRef2 = React.useRef();
  const classRef2 = React.useRef();
  const lvlRef2 = React.useRef();

  const strRef2 = React.useRef();
  const dexRef2 = React.useRef();
  const constRef2 = React.useRef();
  const intRef2 = React.useRef();
  const wisRef2 = React.useRef();
  const chaRef2 = React.useRef();

  function handleNameChange(e) {
    alert(e.target.value)
    setName(e.target.value);
    alert(name)
  }
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleRaceChange(e) {
    setRace(e.target.value);
  }
  function handleProfessionChange(e) {
    setRace(e.target.value);
  }
  function handleLevelChange(e) {
    setLevel(e.target.value);
  }

  function handleStrengthChange(e) {
    setStrength(e.target.value);
  }
  function handleDexterityChange(e) {
    setDexterity(e.target.value);
  }
  function handleConstitutionChange(e) {
    setConstitution(e.target.value);
  }
  function handleIntelligenceChange(e) {
    setIntelligence(e.target.value);
  }
  function handleWisdomChange(e) {
    setWisdom(e.target.value);
  }
  function handleCharismaChange(e) {
    setCharisma(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateCard({
      name: nameRef2.current.value,
      url: urlRef2.current.value,
      race: raceRef2.current.value,
      profession: classRef2.current.value,
      level: lvlRef2.current.value,
      strength: strRef2.current.value,
      dexterity: dexRef2.current.value,
      constitution: constRef2.current.value,
      intelligence: intRef2.current.value,
      wisdom: wisRef2.current.value,
      charisma: chaRef2.current.value,
      cardId: props.card.cardId
    })
  }

  useEffect(() => {
    setName(props.card.name)
    setUrl(props.card.link)

    setRace(props.card.race)
    setProfession(props.card.profession)
    setLevel(props.card.level)

    setStrength(props.card.strength)
    setDexterity(props.card.dexterity)
    setConstitution(props.card.constitution)
    setIntelligence(props.card.intelligence)
    setWisdom(props.card.wisdom)
    setCharisma(props.card.charisma)
  }, [props.card]); 
  
  return(
    <PopupWithForm name="place-popup" title="Обновление листа персонажа" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <input ref={nameRef2} id="name-input" className="popup__input place-popup__input_name" placeholder='Название' value={name} name="place-name" type="text" minLength="2" maxLength="30" required onChange={handleNameChange} />
    <span id="name-input-error" className="popup__input-error" /> 
    <input ref={urlRef2} id="url-input" className="popup__input place-popup__input_image" placeholder='Ссылка на картинку' value={url} name="place-image" type="url" required onChange={handleUrlChange} />
    <span id="url-input-error" className="popup__input-error" /> 

    <input ref={raceRef2} id="race-input" className="popup__input place-popup__input_race" placeholder='Раса' value={race} name="place-race" type="text" required onChange={handleRaceChange} />
    <span id="race-input-error" className="popup__input-error" /> 
    <input ref={classRef2} id="class-input" className="popup__input place-popup__input_class" placeholder='Класс' value={profession} name="place-class" type="text" required onChange={handleProfessionChange} />
    <span id="class-input-error" className="popup__input-error" /> 
    <input ref={lvlRef2} id="lvl-input" className="popup__input place-popup__input_level" placeholder='Уровень' value={level} name="place-level" type="text" required onChange={handleLevelChange} />

    <span id="lvl-input-error" className="popup__input-error" /> 
    <input ref={strRef2} id="strength-input" className="popup__input place-popup__input_attribute" placeholder='Сила' value={strength} name="place-attribute" type="text" required onChange={handleStrengthChange} />
    <span id="strenght-input-error" className="popup__input-error" /> 
    <input ref={dexRef2} id="dexterity-input" className="popup__input place-popup__input_attribute" placeholder='Ловкость' value={dexterity} name="place-attribute" type="text" required onChange={handleDexterityChange} />
    <span id="dexterity-input-error" className="popup__input-error" /> 
    <input ref={constRef2} id="constitution-input" className="popup__input place-popup__input_attribute" placeholder='Выносливость' value={constitution} name="place-attribute" type="text" required onChange={handleConstitutionChange} />
    <span id="constitution-input-error" className="popup__input-error" /> 
    <input ref={intRef2} id="intelligence-input" className="popup__input place-popup__input_attribute" placeholder='Интеллект' value={intelligence} name="place-attribute" type="text" required onChange={handleIntelligenceChange} />
    <span id="intelligence-input-error" className="popup__input-error" /> 
    <input ref={wisRef2} id="wisdom-input" className="popup__input place-popup__input_attribute" placeholder='Мудрость' value={wisdom} name="place-attribute" type="text" required onChange={handleWisdomChange} />
    <span id="wisdom-input-error" className="popup__input-error" /> 
    <input ref={chaRef2} id="charisma-input" className="popup__input place-popup__input_attribute" placeholder='Харизма' value={charisma} name="place-attribute" type="text" required onChange={handleCharismaChange} />
    <span id="charisma-input-error" className="popup__input-error" /> 

    <button className="popup__button place-submit" type="submit" name="place-submit" >Сохранить</button>
  </PopupWithForm>    
  )
}