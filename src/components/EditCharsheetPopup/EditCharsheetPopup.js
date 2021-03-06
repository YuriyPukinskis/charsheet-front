import PopupWithForm from '../PopupWithForm/PopupWithForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function EditCharsheetPopup(props){
  const [name,setName] = useState();
  const [game,setGame] = useState();
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
  const [notes,setNotes] = useState();
  const [weight,setWeight] = useState();
  const [inventory,setInventory] = useState();

  const nameRef2 = React.useRef();
  const urlRef2 = React.useRef();

  const raceRef2 = React.useRef();
  const gameRef2 = React.useRef();
  const classRef2 = React.useRef();
  const lvlRef2 = React.useRef();

  const strRef2 = React.useRef();
  const dexRef2 = React.useRef();
  const constRef2 = React.useRef();
  const intRef2 = React.useRef();
  const wisRef2 = React.useRef();
  const chaRef2 = React.useRef();

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

  const notesRef2 = React.useRef();
  const weightRef = React.useRef();
  const inventoryRef = React.useRef();

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleGameChange(e) {
    setGame(e.target.value);
  }
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleRaceChange(e) {
    setRace(e.target.value);
  }
  function handleProfessionChange(e) {
    setProfession(e.target.value);
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
  function handleNotesChange(e) {
    setNotes(e.target.value);
  }
  function handleWeightChange(e) {
    setWeight(e.target.value);
  }
  function handleInventoryChange(e) {
    setInventory(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateCard({
      name: nameRef2.current.value,
      game : gameRef2.current.value,
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
      cardId: props.card.cardId,

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
      notes: notesRef2.current.value,
      weight: weightRef.current.value
    })
  }

  useEffect(() => {
    setName(props.card.name)
    setGame(props.card.game)
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
    setNotes(props.card.notes)
    setWeight(props.card.weight)
    setInventory(props.card.inventory)
  }, [props.card]); 
  
  return(
    <PopupWithForm name="place-popup" title="???????????????????? ?????????? ??????????????????" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <input ref={nameRef2} id="name-input" className="popup__input place-popup__input_name" placeholder='????????????????' value={name} name="place-name" type="text" minLength="2" maxLength="30" required onChange={handleNameChange} />
    <span id="name-input-error" className="popup__input-error" />
    <input ref={gameRef2} id="name-input" className="popup__input place-popup__input_name" placeholder='????????' value={game} name="place-name" type="text" onChange={handleGameChange} />
    <input ref={urlRef2} id="url-input" className="popup__input place-popup__input_image" placeholder='???????????? ???? ????????????????' value={url} name="place-image" type="url" required onChange={handleUrlChange} />
    <span id="url-input-error" className="popup__input-error" /> 

    <input ref={raceRef2} id="race-input" className="popup__input place-popup__input_race" placeholder='????????' value={race} name="place-race" type="text" required onChange={handleRaceChange} />
    <span id="race-input-error" className="popup__input-error" /> 
    <input ref={classRef2} id="class-input" className="popup__input place-popup__input_class" placeholder='??????????' value={profession} name="place-class" type="text" required onChange={handleProfessionChange} />
    <span id="class-input-error" className="popup__input-error" /> 
    <input ref={lvlRef2} id="lvl-input" className="popup__input place-popup__input_level" placeholder='??????????????' value={level} name="place-level" type="text" required onChange={handleLevelChange} />

    <span id="lvl-input-error" className="popup__input-error" /> 
    <input ref={strRef2} id="strength-input" className="popup__input place-popup__input_attribute" placeholder='????????' value={strength} name="place-attribute" type="text" required onChange={handleStrengthChange} />
    <span id="strenght-input-error" className="popup__input-error" /> 
    <input ref={dexRef2} id="dexterity-input" className="popup__input place-popup__input_attribute" placeholder='????????????????' value={dexterity} name="place-attribute" type="text" required onChange={handleDexterityChange} />
    <span id="dexterity-input-error" className="popup__input-error" /> 
    <input ref={constRef2} id="constitution-input" className="popup__input place-popup__input_attribute" placeholder='????????????????????????' value={constitution} name="place-attribute" type="text" required onChange={handleConstitutionChange} />
    <span id="constitution-input-error" className="popup__input-error" /> 
    <input ref={intRef2} id="intelligence-input" className="popup__input place-popup__input_attribute" placeholder='??????????????????' value={intelligence} name="place-attribute" type="text" required onChange={handleIntelligenceChange} />
    <span id="intelligence-input-error" className="popup__input-error" /> 
    <input ref={wisRef2} id="wisdom-input" className="popup__input place-popup__input_attribute" placeholder='????????????????' value={wisdom} name="place-attribute" type="text" required onChange={handleWisdomChange} />
    <span id="wisdom-input-error" className="popup__input-error" /> 
    <input ref={chaRef2} id="charisma-input" className="popup__input place-popup__input_attribute" placeholder='??????????????' value={charisma} name="place-attribute" type="text" required onChange={handleCharismaChange} />
    <span id="charisma-input-error" className="popup__input-error" /> 

    <input ref={useMagicDeviceBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='?????????????????????????? ???????????????????? ??????????????????' name="character-attribute" type="text" />
    <input ref={survivalBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" />
    <input ref={spellcraftBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={senseMotiveBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????/????????????????????????????????' name="character-attribute" type="text" />
    <input ref={professionBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" />
    <input ref={perceptionBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={knowledgeBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????' name="character-attribute" type="text" />
    <input ref={healBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={flyBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????' name="character-attribute" type="text" />
    <input ref={disguiseBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={diplomacyBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={climbBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={appraiseBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????' name="character-attribute" type="text" />
    <input ref={swimBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????' name="character-attribute" type="text" />
    <input ref={stealthBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <input ref={sleightOfHandBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='???????????????? ??????' name="character-attribute" type="text" />
    <input ref={rideBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='???????????????? ????????' name="character-attribute" type="text" />
    <input ref={performBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={linguisticsBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={intimidateBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????????????' name="character-attribute" type="text" />
    <input ref={handleAnimalBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='?????????????????? ?? ??????????????????' name="character-attribute" type="text" />
    <input ref={escapeArtistBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????????????' name="character-attribute" type="text" />
    <input ref={disableDeviceBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='???????????????????? ??????????????????' name="character-attribute" type="text" />
    <input ref={craftBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" />
    <input ref={bluffBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????' name="character-attribute" type="text" />
    <input ref={acrobaticsBonusRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='????????????????????' name="character-attribute" type="text" />
    <textarea ref={notesRef2} className="popup__input character-popup__input_attribute" placeholder='??????????????' name="character-attribute" type="text" value={notes} onChange={handleNotesChange} />
    <textarea ref={inventoryRef} className="popup__input character-popup__input_attribute" placeholder='??????????????????' name="character-attribute" type="text" value={inventory} onChange={handleInventoryChange} />
    <input ref={weightRef} id="charisma-input" className="popup__input character-popup__input_attribute" placeholder='??????' name="character-attribute" type="text" value={weight} onChange={handleWeightChange} />
    <button className="popup__button place-submit" type="submit" name="place-submit" >??????????????????</button>
  </PopupWithForm>    
  )
}