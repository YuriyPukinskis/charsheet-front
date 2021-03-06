import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React from 'react';

export default function AddCharacterPopup(props){
  
  const nameRef = React.useRef();
  const gameRef = React.useRef();
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

  const useMagicDeviceBonusRef = React.useRef();
  const survivalBonusRef = React.useRef();
  const spellcraftBonusRef = React.useRef();
  const senseMotiveBonusRef = React.useRef();
  const professionBonusRef = React.useRef();
  const perceptionBonusRef = React.useRef();
  const knowledgeBonusRef = React.useRef();
  const healBonusRef = React.useRef();
  const flyBonusRef = React.useRef();
  const disguiseBonusRef = React.useRef();
  const diplomacyBonusRef = React.useRef();
  const climbBonusRef = React.useRef();
  const appraiseBonusRef = React.useRef();
  const swimBonusRef = React.useRef();
  const stealthBonusRef = React.useRef();
  const sleightOfHandBonusRef = React.useRef();
  const rideBonusRef = React.useRef();
  const performBonusRef = React.useRef();
  const linguisticsBonusRef = React.useRef();
  const intimidateBonusRef = React.useRef();
  const handleAnimalBonusRef = React.useRef();
  const escapeArtistBonusRef = React.useRef();
  const disableDeviceBonusRef = React.useRef();
  const craftBonusRef = React.useRef();
  const bluffBonusRef = React.useRef();
  const acrobaticsBonusRef = React.useRef();
  
  const notesRef = React.useRef();

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
      charisma: chaRef.current.value,

      useMagicDeviceBonusLevel: useMagicDeviceBonusRef.current.value,
      survivalBonusLevel: survivalBonusRef.current.value,
      spellcraftBonusLevel: spellcraftBonusRef.current.value,
      senseMotiveBonusLevel: senseMotiveBonusRef.current.value,
      professionBonusLevel: professionBonusRef.current.value,
      perceptionBonusLevel: perceptionBonusRef.current.value,
      knowledgeBonusLevel: knowledgeBonusRef.current.value,
      healBonusLevel: healBonusRef.current.value,
      flyBonusLevel: flyBonusRef.current.value,
      disguiseBonusLevel: disguiseBonusRef.current.value,
      diplomacyBonusLevel: diplomacyBonusRef.current.value,
      climbBonusLevel: climbBonusRef.current.value,
      appraiseBonusLevel: appraiseBonusRef.current.value,
      swimBonusLevel: swimBonusRef.current.value,
      stealthBonusLevel: stealthBonusRef.current.value,
      sleightOfHandBonusLevel: sleightOfHandBonusRef.current.value,
      rideBonusLevel: rideBonusRef.current.value,
      performBonusLevel: performBonusRef.current.value,
      linguisticsBonusLevel: linguisticsBonusRef.current.value,
      intimidateBonusLevel: intimidateBonusRef.current.value,
      handleAnimalBonusLevel: handleAnimalBonusRef.current.value,
      escapeArtistBonusLevel: escapeArtistBonusRef.current.value,
      disableDeviceBonusLevel: disableDeviceBonusRef.current.value,
      craftBonusLevel: craftBonusRef.current.value,
      bluffBonusLevel: bluffBonusRef.current.value,
      acrobaticsBonusLevel: acrobaticsBonusRef.current.value,
      game: gameRef.current.value,

      notes: notesRef.current.value,
    })
    // nameRef.current.value='';
    // urlRef.current.value=''
  }

  return(
    <PopupWithForm className="character-popup" name="character-popup" title="?????????? ????????????????" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <input ref={nameRef} id="image-input" className="popup__input character-popup__input_name" placeholder='??????' name="character-name" type="text" minLength="2" maxLength="30" required />
    <span id="image-input-error" className="popup__input-error" /> 
    <input ref={gameRef} id="image-input" className="popup__input character-popup__input_name" placeholder='????????' name="character-name" type="text" />
    <input ref={urlRef} id="url-input" className="popup__input character-popup__input_image" placeholder='???????????? ???? ????????????????' name="character-image" type="url" />
    <span id="url-input-error" className="popup__input-error" required/> 

    <select ref={raceRef} name="lang" className="popup__input character-popup__input_race" required>
      <option value="??????????????">??????????????</option>
      <option value="????????">????????</option>
      <option value="??????????">??????????</option>
      <option value="????????">????????</option>
      <option value="????????????????">????????????????</option>
      <option value="????????????????????">????????????????????</option>
      <option value="??????????????">??????????????</option>
    </select>
    <span id="race-input-error" className="popup__input-error" /> 
    <select ref={classRef} name="lang" className="popup__input character-popup__input_profession" required>
      <option value="????????">????????</option>
      <option value="????????????">????????????</option>
      <option value="????????">????????</option>
      <option value="??????????????????">??????????????????</option>
      <option value="??????????">??????????</option>
      <option value="????????">????????</option>
      <option value="??????????">??????????</option>
      <option value="??????????????">??????????????</option>
      <option value="??????????????????">??????????????????</option>
      <option value="????????????????">????????????????</option>
      <option value="??????????????">??????????????</option>
    </select>
    <span id="class-input-error" className="popup__input-error" /> 
    <input ref={lvlRef} id="lvl-input" className="popup__input character-popup__input_level" placeholder='??????????????' name="character-level" type="text" required />
    <span id="lvl-input-error" className="popup__input-error" /> 
    <input ref={strRef} id="strength-input" className="popup__input character-popup__input_attribute" placeholder='????????' name="character-attribute" type="text" required />
    <span id="strenght-input-error" className="popup__input-error" /> 
    <input ref={dexRef} id="dexterity-input" className="popup__input character-popup__input_attribute" placeholder='????????????????' name="character-attribute" type="text" required />
    <span id="dexterity-input-error" className="popup__input-error" /> 
    <input ref={constRef} id="constitution-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????????' name="character-attribute" type="text" required />
    <span id="constitution-input-error" className="popup__input-error" /> 
    <input ref={intRef} id="intelligence-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" required />
    <span id="intelligence-input-error" className="popup__input-error" /> 
    <input ref={wisRef} id="wisdom-input" className="popup__input character-popup__input_attribute" placeholder='????????????????' name="character-attribute" type="text" required />
    <span id="wisdom-input-error" className="popup__input-error" /> 
    <input ref={chaRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" required />
    <span id="charisma-input-error" className="popup__input-error" /> 


    <input ref={useMagicDeviceBonusRef} className="popup__input character-popup__input_attribute" placeholder='?????????????????????????? ???????????????????? ??????????????????' name="character-attribute" type="text" />
    <input ref={survivalBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" />
    <input ref={spellcraftBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={senseMotiveBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????/????????????????????????????????' name="character-attribute" type="text" />
    <input ref={professionBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" />
    <input ref={perceptionBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={knowledgeBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????' name="character-attribute" type="text" />
    <input ref={healBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={flyBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????' name="character-attribute" type="text" />
    <input ref={disguiseBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={diplomacyBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={climbBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={appraiseBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????' name="character-attribute" type="text" />
    <input ref={swimBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????' name="character-attribute" type="text" />
    <input ref={stealthBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={sleightOfHandBonusRef} className="popup__input character-popup__input_attribute" placeholder='???????????????? ??????' name="character-attribute" type="text" />
    <input ref={rideBonusRef} className="popup__input character-popup__input_attribute" placeholder='???????????????? ????????' name="character-attribute" type="text" />
    <input ref={performBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={linguisticsBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={intimidateBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={handleAnimalBonusRef} className="popup__input character-popup__input_attribute" placeholder='?????????????????? ?? ??????????????????' name="character-attribute" type="text" />
    <input ref={escapeArtistBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????????????' name="character-attribute" type="text" />
    <input ref={disableDeviceBonusRef} className="popup__input character-popup__input_attribute" placeholder='???????????????????? ??????????????????' name="character-attribute" type="text" />
    <input ref={craftBonusRef} className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={bluffBonusRef}  className="popup__input character-popup__input_attribute" placeholder='????????' name="character-attribute" type="text" />
    <input ref={acrobaticsBonusRef} className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <textarea ref={notesRef} className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <button className="popup__button character-submit" type="submit" name="character-submit" >??????????????????</button>
  </PopupWithForm>    
  )
}