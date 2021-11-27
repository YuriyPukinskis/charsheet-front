import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React from 'react';

export default function AddCharacterPopup(props){
  
  const nameRef = React.useRef();
  const urlRef = React.useRef();

  const raceRef = React.useRef();
  const classRef = React.useRef();
  const lvlRef = React.useRef();

  const strRef = React.useRef();
  const dexRef = React.useRef();
  const constRef = React.useRef();
  const intRef = React.useRef();
  const wisRef = React.useRef();
  const chaRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onApploadCard({
      name: nameRef.current.value,
      url: urlRef.current.value,
      race: raceRef.current.value,
      profession: classRef.current.value,
      level: lvlRef.current.value,
      strength: strRef.current.value,
      dexterity: dexRef.current.value,
      constitution: constRef.current.value,
      intelligence: intRef.current.value,
      wisdom: wisRef.current.value,
      charisma: chaRef.current.value
    })
    // nameRef.current.value='';
    // urlRef.current.value=''
  }

  return(
    <PopupWithForm name="character-popup" title="Новый персонаж" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <input ref={nameRef} id="image-input" className="popup__input character-popup__input_name" placeholder='Имя' name="character-name" type="text" minLength="2" maxLength="30" required />
    <span id="image-input-error" className="popup__input-error" /> 
    <input ref={urlRef} id="url-input" className="popup__input character-popup__input_image" placeholder='Ссылка на картинку' name="character-image" type="url" required />
    <span id="url-input-error" className="popup__input-error" /> 

    <input ref={raceRef} id="race-input" className="popup__input character-popup__input_race" placeholder='Раса' name="character-race" type="text" required />
    <span id="race-input-error" className="popup__input-error" /> 
    <input ref={classRef} id="class-input" className="popup__input character-popup__input_class" placeholder='Класс' name="character-class" type="text" required />
    <span id="class-input-error" className="popup__input-error" /> 
    <input ref={lvlRef} id="lvl-input" className="popup__input character-popup__input_level" placeholder='Уровень' name="character-level" type="text" required />
    <span id="lvl-input-error" className="popup__input-error" /> 
    <input ref={strRef} id="strength-input" className="popup__input character-popup__input_attribute" placeholder='Сила' name="character-attribute" type="text" required />
    <span id="strenght-input-error" className="popup__input-error" /> 
    <input ref={dexRef} id="dexterity-input" className="popup__input character-popup__input_attribute" placeholder='Ловкость' name="character-attribute" type="text" required />
    <span id="dexterity-input-error" className="popup__input-error" /> 
    <input ref={constRef} id="constitution-input" className="popup__input character-popup__input_attribute" placeholder='Выносливость' name="character-attribute" type="text" required />
    <span id="constitution-input-error" className="popup__input-error" /> 
    <input ref={intRef} id="intelligence-input" className="popup__input character-popup__input_attribute" placeholder='Интеллект' name="character-attribute" type="text" required />
    <span id="intelligence-input-error" className="popup__input-error" /> 
    <input ref={wisRef} id="wisdom-input" className="popup__input character-popup__input_attribute" placeholder='Мудрость' name="character-attribute" type="text" required />
    <span id="wisdom-input-error" className="popup__input-error" /> 
    <input ref={chaRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='Харизма' name="character-attribute" type="text" required />
    <span id="charisma-input-error" className="popup__input-error" /> 

    <button className="popup__button character-submit" type="submit" name="character-submit" >Сохранить</button>
  </PopupWithForm>    
  )
}