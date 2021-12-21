import React from 'react';
import { useState, useEffect } from 'react';

export default function CharSheetPopup(props){

  useEffect(() => {
    setArmourName(props.card.armourName)
    setShieldName(props.card.shieldName)
    setArmourBonus(props.card.armourBonus)
    setShieldBonus(props.card.shieldBonus)
    setArmourType(props.card.armourType)
    setShieldType(props.card.shieldType)
    setArmourPenalty(props.card.armourPenalty)
    setShieldPenalty(props.card.shieldPenalty)
    setArmourSpellFail(props.card.armourSpellFail)
    setShieldSpellFail(props.card.shieldSpellFail)
  }, [props.card]); 

  const strBonus = Math.floor((props.card.strength-10)/2);
  const dexBonus = Math.floor((props.card.dexterity-10)/2);
  const constBonus = Math.floor((props.card.constitution-10)/2);
  const intBonus = Math.floor((props.card.intelligence-10)/2);
  const wisBonus = Math.floor((props.card.wisdom-10)/2);
  const chaBonus = Math.floor((props.card.charisma-10)/2);

  const statRef = React.useRef();
  const damageRef = React.useRef();
  const notesRef = React.useRef();
  const itemNameRef = React.useRef();
  const itemQuantityRef = React.useRef();
  const weightRef = React.useRef();

  const armourNameRef = React.useRef();
  const shieldNameRef = React.useRef();
  const armourBonusRef = React.useRef();
  const shieldBonusRef = React.useRef();
  const armourTypeRef = React.useRef();
  const shieldTypeRef = React.useRef();
  const armourPenaltyRef = React.useRef();
  const shieldPenaltyRef = React.useRef();
  const armourSpellFailRef = React.useRef();
  const shieldSpellFailRef = React.useRef();
  const armourWeightRef = React.useRef();
  const shieldWeightRef = React.useRef();

  let averageHitDie = 0;
  let bab = 0;
  let chbox=document.getElementById('specialAttack');
  let twoHanded=document.getElementById('twoHanded');

  let fortitudeBonus = 0;
  let reflexBonus = 0;
  let willBonus = 0;
  
  const badSave = Math.floor(props.card.level/3);
  const goodSave = 2 + Math.floor(props.card.level/3);

  let CMB = 0;
  let CMD = 0;
  let spellSlots1 = [];
  let spellSlots2 = [];
  let spellSlots3 = [];
  let spellSlots4 = [];
  let spellSlots5 = [];
  let spellSlots6 = [];
  let spellSlots7 = [];
  let spellSlots8 = [];
  let spellSlots9 = [];

  let spellSlots1Domain = [];
  let spellSlots2Domain = [];
  let spellSlots3Domain = [];
  let spellSlots4Domain = [];
  let spellSlots5Domain = [];
  let spellSlots6Domain = [];
  let spellSlots7Domain = [];
  let spellSlots8Domain = [];
  let spellSlots9Domain = [];

  const [armourName,setArmourName] = useState('');
  const [shieldName,setShieldName] = useState('');
  const [armourBonus,setArmourBonus] = useState('');
  const [shieldBonus,setShieldBonus] = useState('');
  const [armourType,setArmourType] = useState('');
  const [shieldType,setShieldType] = useState('');
  const [armourPenalty,setArmourPenalty] = useState('');
  const [shieldPenalty,setShieldPenalty] = useState('');
  const [armourSpellFail,setArmourSpellFail] = useState('');
  const [shieldSpellFail,setShieldSpellFail] = useState('');
  const [armourWeight,setArmourWeight] = useState('');
  const [shieldWeight,setShieldWeight] = useState('');
  const [weight,setWeight] = useState('');
  const [itemName,setItemName] = useState('');
  const [itemQuantity,setItemQuantity] = useState('');
  
  function handleArmourChange(e,foo){
    foo(e.target.value)
  }  

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

  function setSpellSlots(spells1,spells2,spells3,spells4,spells5,spells6,spells7,spells8,spells9,atrBonus){

    if(spells1>0||((props.card.profession === 'Паладин')&&(props.card.level === 4))||((props.card.profession === 'Рейнджер')&&(props.card.level === 4))){
      for(let i=0;i<(spells1+atrBonus);i++){
        spellSlots1.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots1Domain.push("");
      }
    }
    if(spells2>0||((props.card.profession === 'Паладин')&&(props.card.level === 7))||((props.card.profession === 'Рейнджер')&&(props.card.level === 7))){
      for(let i=0;i<(spells2+atrBonus);i++){
        spellSlots2.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots2Domain.push("");
      }
    }
    if(spells3>0||((props.card.profession === 'Паладин')&&(props.card.level === 10))||((props.card.profession === 'Рейнджер')&&(props.card.level === 10))){
      for(let i=0;i<(spells3+atrBonus);i++){
        spellSlots3.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots3Domain.push("");
      }
    }
    if(spells4>0||((props.card.profession === 'Паладин')&&(props.card.level === 13))||((props.card.profession === 'Рейнджер')&&(props.card.level === 13))){
      for(let i=0;i<(spells4+atrBonus);i++){
        spellSlots4.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots4Domain.push("");
      }
    }
    if(spells5>0){
      for(let i=0;i<(spells5+atrBonus);i++){
        spellSlots5.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots5Domain.push("");
      }
    }
    if(spells6>0){
      for(let i=0;i<(spells6+atrBonus);i++){
        spellSlots6.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots6Domain.push("");
      }
    }
    if(spells7>0){
      for(let i=0;i<(spells7+atrBonus);i++){
        spellSlots7.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots7Domain.push("");
      }
    }
    if(spells8>0){
      for(let i=0;i<(spells8+atrBonus);i++){
        spellSlots8.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots8Domain.push("");
      }
    }
    if(spells9>0){
      for(let i=0;i<(spells9+atrBonus);i++){
        spellSlots9.push("");
      }
      for(let i=0;i<(1+atrBonus);i++){
        spellSlots9Domain.push("");
      }
    }
  }

  let spells_firstCircle = [];
  let spells_secondCircle =[];
  let spells_thirdCircle = [];
  let spells_fourthCircle =[];
  let spells_fifthCircle = [];
  let spells_sixthCircle = [];
  let spells_seventhCircle=[];
  let spells_eightthCircle=[];
  let spells_ninethCircle= [];

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

    

      spells_firstCircle = [1,2,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5];
      spells_secondCircle =[0,0,0,1,2,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5];
      spells_thirdCircle = [0,0,0,0,0,0,1,2,3,3,4,4,4,4,5,5,5,5,5,5];
      spells_fourthCircle =[0,0,0,0,0,0,0,0,0,1,2,3,3,4,4,4,4,5,5,5];
      spells_fifthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,4,4,5,5];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5];
      
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],chaBonus)
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

      spells_firstCircle = [1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_secondCircle =[0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_thirdCircle = [0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4];
      spells_fourthCircle =[0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4];
      spells_fifthCircle = [0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,4];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4];
      
    
      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
                    spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
                    spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],intBonus)
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

      spells_firstCircle = [1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_secondCircle =[0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_thirdCircle = [0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4];
      spells_fourthCircle =[0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4];
      spells_fifthCircle = [0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,4];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],wisBonus)
      
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

      spells_firstCircle = [1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_secondCircle =[0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4];
      spells_thirdCircle = [0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4];
      spells_fourthCircle =[0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4,4,4];
      spells_fifthCircle = [0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4,4,4];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4,4,4];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,4,4];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,4];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],wisBonus)
      
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

      spells_firstCircle = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
      spells_secondCircle =[0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4];
      spells_thirdCircle = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3];
      spells_fourthCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3];
      
      spells_fifthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],chaBonus)
      
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

      spells_firstCircle = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
      spells_secondCircle =[0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4];
      spells_thirdCircle = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3];
      spells_fourthCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3];
      
      spells_fifthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],wisBonus)
      
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

      spells_firstCircle = [3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
      spells_secondCircle =[0,0,0,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
      spells_thirdCircle = [0,0,0,0,0,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6];
      spells_fourthCircle =[0,0,0,0,0,0,0,3,4,5,6,6,6,6,6,6,6,6,6,6];
      spells_fifthCircle = [0,0,0,0,0,0,0,0,0,3,4,5,6,6,6,6,6,6,6,6];
      spells_sixthCircle = [0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,6,6,6,6,6];
      spells_seventhCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,6,6,6];
      spells_eightthCircle=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,6];
      spells_ninethCircle =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,6];

      setSpellSlots(spells_firstCircle[props.card.level-1],spells_secondCircle[props.card.level-1],spells_thirdCircle[props.card.level-1],
        spells_fourthCircle[props.card.level-1],spells_fifthCircle[props.card.level-1],spells_sixthCircle[props.card.level-1],
        spells_seventhCircle[props.card.level-1],spells_eightthCircle[props.card.level-1],spells_ninethCircle[props.card.level-1],chaBonus)
      
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


  function handleUpdateJournal(){
    let newDate = new Date()
    const separator='.';
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    props.onUpdateCard({
      name: props.card.name,
      game: props.card.game,
      url: props.card.link,
      race: props.card.race,
      profession: props.card.profession,
      level: props.card.level,
      strength: props.card.strength,
      dexterity: props.card.dexterity,
      constitution: props.card.constitution,
      intelligence: props.card.intelligence,
      wisdom: props.card.wisdom,
      charisma: props.card.charisma,
      cardId: props.card.cardId,

      notes: props.card.notes + '\n\n' + `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}` + ': ' + notesRef.current.value,
    })
  }

  function handleUpdateInventory(){
    alert(props.card.weight)
    props.onUpdateCard({
      name: props.card.name,
      game: props.card.game,
      url: props.card.link,
      race: props.card.race,
      profession: props.card.profession,
      level: props.card.level,
      strength: props.card.strength,
      dexterity: props.card.dexterity,
      constitution: props.card.constitution,
      intelligence: props.card.intelligence,
      wisdom: props.card.wisdom,
      charisma: props.card.charisma,
      cardId: props.card.cardId,

      inventory: props.card.inventory + '\n\n' + itemNameRef.current.value + ' ' + itemQuantityRef.current.value + ' ' + weightRef.current.value,
      weight: parseInt(props.card.weight) + parseInt(weightRef.current.value),

      armourName:props.card.armourName,
      shieldName:props.card.shieldName,
      armourBonus:props.card.armourBonus,
      shieldBonus:props.card.shieldBonus,
      armourType:props.card.armourType,
      shieldType:props.card.shieldType,
      armourPenalty:props.card.armourPenalty,
      shieldPenalty:props.card.shieldPenalty,
      armourSpellFail:props.card.armourSpellFail,
      shieldSpellFail:props.card.shieldSpellFail,

    })
  }

  function handleAddArmour(){
    alert(armourNameRef.current.value)
    props.onUpdateCard({
      name: props.card.name,
      game: props.card.game,
      url: props.card.link,
      race: props.card.race,
      profession: props.card.profession,
      level: props.card.level,
      strength: props.card.strength,
      dexterity: props.card.dexterity,
      constitution: props.card.constitution,
      intelligence: props.card.intelligence,
      wisdom: props.card.wisdom,
      charisma: props.card.charisma,
      cardId: props.card.cardId,

      armourName:armourNameRef.current.value,
      shieldName:shieldNameRef.current.value,
      armourBonus:armourBonusRef.current.value,
      shieldBonus:shieldBonusRef.current.value,
      armourType:armourTypeRef.current.value,
      shieldType:shieldTypeRef.current.value,
      armourPenalty:armourPenaltyRef.current.value,
      shieldPenalty:shieldPenaltyRef.current.value,
      armourSpellFail:armourSpellFailRef.current.value,
      shieldSpellFail:shieldSpellFailRef.current.value,

      inventory: props.card.inventory,

      weight: parseInt(props.card.weight) + parseInt(armourWeightRef.current.value) + parseInt(shieldWeightRef.current.value),

    })
  }

  const hp = averageHitDie+constBonus+(constBonus+averageHitDie/2+1)*(props.card.level-1);
  function rollDice(sides){
    return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
  }
  function rollStat(statBonus){
    const roll = rollDice(20);
    const result = statBonus + roll ;
    props.setRollText('Результат броска '+roll+' Значение бонуса'+statBonus+' Таким образом, итоговый результат ')
    props.setRollResult(result)
    props.handleRoll(true)
  }
  function rollAttack(statBonus){
    let dinamicBab = bab;
    let resultString ='';
    while(dinamicBab>=0){
      const roll = rollDice(20);
      let result = roll + parseInt(statBonus) + dinamicBab;
      const powerMod = 1 + Math.trunc(bab/4);
      const moddedResult = result - powerMod;
      resultString+='Результат броска '+roll+' Базовый модификатор атаки ' + dinamicBab + ` ${chbox.checked?'Был применен Сокрушительный УДАР! Значение бонуса'+statBonus+'  Значение штрафа от сокрушительного УДАРА! ' +powerMod+'\n\n Таким образом, итоговый результат '+ moddedResult:' Значение бонуса '+statBonus+'\n\n Таким образом, итоговый результат '+result+'\n\n\n\n\n'}`;
      dinamicBab = dinamicBab -5;
    }
    props.setRollText(resultString)
    props.setRollResult()
    props.handleRoll(true)
  }
  function rollDamage(weaponDamage, statBonus){
    const rollDamage = weaponDamage.split('d')
    let roll = 0;
    for (let i = 0; i<rollDamage[0]; i++){
      roll = roll + rollDice(rollDamage[1]);
    }
    let result = 0;
    let powerMod = 0
    if(!twoHanded.checked){
      result = roll + parseInt(statBonus);
      powerMod = (1 + Math.trunc(bab/4))*2;
    } else{
      result = roll + Math.floor(parseInt(statBonus)*3/2);
      powerMod = Math.floor((1 + Math.trunc(bab/4))*3/2);
    }
    
    const moddedResult = result + powerMod;
    props.setRollText('Результат броска '+roll + ` ${chbox.checked?'Был применен Сокрушительный УДАР! Значение бонуса'+statBonus+'  Значение бонуса от сокрушительного УДАРА! ' +powerMod+'\n\n Таким образом, итоговый результат ':' Значение бонуса '+statBonus+'\n\n Таким образом, итоговый результат '}`)
    !chbox.checked ? props.setRollResult(result) : props.setRollResult(moddedResult);
    props.handleRoll(true)
  }
  function rollSave(saveBonus){
    const roll = rollDice(20);
    const result = roll + saveBonus;
    props.setRollText('Результат броска '+roll+' Значение бонуса'+saveBonus+' Таким образом, итоговый результат ')
    props.setRollResult(result)
    props.handleRoll(true)    
  }
  function rollSkill(skillBonus){
    const roll = rollDice(20);
    const result = roll + skillBonus;
    props.setRollText('Результат броска '+roll+' Значение бонуса'+skillBonus+' Таким образом, итоговый результат ')
    props.setRollResult(result)
    props.handleRoll(true)
  }

  let load = 0;

  

  return(
    <div className={`popup charSheetPopup ${props.isBigImageOpen?'popup_visible':''}`}>
      <div className="charSheetPopup__container">
        <img className="charSheetPopup__img" alt="Изображение" src={props.card.link} />
        <div className="captionField">
          <div className="caption"><span className='caption_explain'>Имя:</span> {props.card.name}</div>
          <div className="caption"><span className='caption_explain'>Раса:</span> {props.card.race}</div>
          <div className="caption"><span className='caption_explain'>Класс:</span> {props.card.profession}</div>
          <div className="caption"><span className='caption_explain'>Уровень:</span> {props.card.level}</div>
          <div className="caption"><span className='caption_explain'>Вес:</span> {props.card.weight} {}</div>
          <div className="caption caption__shield"><span className='caption_explainShield'>АС:</span> <span className='shield'>{10+dexBonus+props.card.armourBonus+props.card.shieldBonus}</span></div>
          <div className="static_characteristics">
            <div className="hp">
              <p className="title title_stat">Здоровье</p>
              <p className = "caption caption_stat caption_explain">Общее количество здоровья: </p>
              <p className="hp_total">{hp}</p>
              <p className = "caption caption_stat caption_explain second">Текущее количество здоровья: </p>
              <input className="hp_current" />
            </div>
            <div className="attack">
            <p className="title title_stat">Атака</p>
              <p className="caption caption_stat bab">Базовый бонус атаки: {bab}</p>
              <div className="check_space">
                <p className="caption caption_stat">Сокрушительный УДАР</p>
                <input type="checkbox" id="specialAttack" className="stat_check"/>
              </div>
              <p className="caption caption_stat">Атакующая харатеристика</p>
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
            <p className="title title_stat">Урон</p>
              <p className="caption caption_stat">Сколько урона наносит твое ковыряло, путник?</p>
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
                <p className="caption caption_stat">Двуручное</p>
                <input type="checkbox" id="twoHanded" className="stat_check" />
              </div>
              <button className="stat_roll" type="button" onClick={() => rollDamage(damageRef.current.value, statRef.current.value)}>Бросить</button>
            </div>

            <div className="savingThrows blockEl">
              <p className="title title_stat">Спас-броски</p>
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
            <div className="combatManeuver blockEl">
              <p className="title title_stat">Боевые маневры</p>
              <div className="check_space">
                <p className="caption_explain">Бонус боевых манёвров: {CMB}</p>
                <button className="stat_roll" type="button" onClick={() => rollSave(CMB)}>Бросить</button>
              </div>
              <p className="caption_explain">Защита [от] боевых манёвров: {CMD}</p>
            </div>
          </div>
          <div className="statblock blockEl">
            <p className="title">Характеристики</p>
            <p className='stat'><span className='caption_explain'>Сила:</span>{props.card.strength} <span className='caption_explain'>Бонус силы:</span> <span className='stat_bonus'>{strBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(strBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Ловкость:</span>{props.card.dexterity} <span className='caption_explain'>Бонус ловкости:</span> <span className='stat_bonus'>{dexBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(dexBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Выносливость:</span>{props.card.constitution} <span className='caption_explain'>Бонус выносливости:</span> <span className='stat_bonus'>{constBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(constBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Интеллект:</span>{props.card.intelligence} <span className='caption_explain'>Бонус интеллекта:</span> <span className='stat_bonus'>{intBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(intBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Мудрость:</span>{props.card.wisdom} <span className='caption_explain'>Бонус мудрости:</span> <span className='stat_bonus'>{wisBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(wisBonus)}>Бросить</button></p>
            <p className='stat'><span className='caption_explain'>Харизма:</span>{props.card.charisma} <span className='caption_explain'>Бонус харизмы:</span> <span className='stat_bonus'>{chaBonus}</span> <button className="stat_roll" type="button" onClick={() => rollStat(chaBonus)}>Бросить</button></p>
          </div>
          <div className="skillblock blockEl">
            <p className="title">Навыки</p>
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

          <div className = {`magic ${(spellSlots1.length!==0)?'magic_visible':''}`}>
            {(spellSlots1.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Первый круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots1, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots1Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots2.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Второй круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots2, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots2Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots3.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Третий круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots3, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots3Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots4.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Четвертый круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots4, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots4Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots5.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Пятый круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots5, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots5Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots6.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Шестой круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots6, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots6Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots7.length!==0)?
              <section className="spells">
                <p className="title title_stat spells_title">Седьмой круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots7, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots7Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots8.length!==0)?
              <section className="spells spells_title">
                <p className="title title_stat">Восьмой круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots8, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots8Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}

            {(spellSlots9.length!==0)?
              <section className="spells spells_title">
                <p className="title title_stat">Девятый круг</p>
                <div className="spells_Level">
                  {Array.prototype.map.call(spellSlots9, function(item,index){
                    return(
                      <input type="checkbox" className="spell_check"/>
                    )
                  })}
                </div>
                {(props.card.profession==='Жрец')?
                  <div>
                    <p className="title title_stat spells_title">Доменные</p>
                    <div className="spells_Level">
                      {Array.prototype.map.call(spellSlots9Domain, function(item,index){
                        return(
                          <input type="checkbox" className="spell_check"/>
                        )
                      })}
                    </div>
                  </div>
                :''}
              </section>
            :''}
          </div>

          <div className='armour'>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'></p>
              <p className='armor_lineTitle armor_space'>Броня</p>
              <p className='armor_lineTitle armor_space'>Щит</p>
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Наименование</p>
              <input ref={armourNameRef} className="armour__name armor_space" id="armour__name" value={armourName} onChange={(e)=>handleArmourChange(e,setArmourName)} placeholder="Наименование брони" />
              <input ref={shieldNameRef} className="shield__name armor_space" id="shield__name" value={shieldName} onChange={(e)=>handleArmourChange(e,setShieldName)} placeholder="Наименование щита" />
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Бонус</p>
              <input ref={armourBonusRef} className="armour__bonus armor_space" id="armour__bonus" value={armourBonus} onChange={(e)=>handleArmourChange(e,setArmourBonus)} placeholder="Бонус брони" />
              <input ref={shieldBonusRef} className="shield__bonus armor_space" id="shield__bonus" value={shieldBonus} onChange={(e)=>handleArmourChange(e,setShieldBonus)} placeholder="Бонус щита" />
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Тип</p>
              <input ref={armourTypeRef} className="armour__type armor_space" id="armour__type" value={armourType} onChange={(e)=>handleArmourChange(e,setArmourType)} placeholder="Тип брони" />
              <input ref={shieldTypeRef} className="shield__type armor_space" id="shield__type" value={shieldType} onChange={(e)=>handleArmourChange(e,setShieldType)} placeholder="Тип щита" />
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Штраф за доспехи</p>
              <input ref={armourPenaltyRef} className="armour__penalty armor_space" id="armour__penalty" value={armourPenalty} onChange={(e)=>handleArmourChange(e,setArmourPenalty)} placeholder="Штраф брони" />
              <input ref={shieldPenaltyRef} className="shield__penalty armor_space" id="shield__penalty" value={shieldPenalty} onChange={(e)=>handleArmourChange(e,setShieldPenalty)} placeholder="Штраф щита" />
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Провал заклинания</p>
              <input ref={armourSpellFailRef} className="armour__spellFail armor_space" id="armour__spellFail" value={armourSpellFail} onChange={(e)=>handleArmourChange(e,setArmourSpellFail)} placeholder="Провал заклинания брони" />
              <input ref={shieldSpellFailRef} className="shield__spellFail armor_space" id="shield__spellFail" value={shieldSpellFail} onChange={(e)=>handleArmourChange(e,setShieldSpellFail)} placeholder="Провал заклинания щита" />
            </div>
            <div className='armor_line'>
              <p className='armor_lineTitle armor_space'>Вес</p>
              <input ref={armourWeightRef} className="armour__weight armor_space" id="armour__weight" value={armourWeight} onChange={(e)=>handleArmourChange(e,setArmourWeight)} placeholder="Вес брони" />
              <input ref={shieldWeightRef} className="shield__weight armor_space" id="shield__weight" value={shieldWeight} onChange={(e)=>handleArmourChange(e,setShieldWeight)} placeholder="Вес щита" />
            </div>
            <button className = "addArmour" onClick={handleAddArmour}>Обновить броню</button>
          </div>

          <div className='inventory'>
            <span className="important_notes">{props.card.inventory}</span>
            <div className='inventory__newItem'>
              <input ref={itemNameRef} className="inventory__itemName"  value={itemName} onChange={(e)=>handleArmourChange(e,setItemName)} placeholder="Наименование" />
              <input ref={itemQuantityRef} className="inventory__itemQuantity"  value={itemQuantity} onChange={(e)=>handleArmourChange(e,setItemQuantity)} placeholder="Количество" />
              <input ref={weightRef} className="inventory__itemWeight"  value={weight} onChange={(e)=>handleArmourChange(e,setWeight)} placeholder="Вес" />
              <button className = "addInventory" onClick={handleUpdateInventory}>Добавить предмет</button>
            </div>
          </div>

          <div className="notes"> 
            <p className="title">Важное</p>
            <span className="important_notes">{props.card.notes}</span>
            <p className="title">Заметки на сессии</p>
            <textarea ref={notesRef} rows="15" cols="40" className="quickNotes" placeholder='Gjvtnrb' />
            <button className = "addJournal" onClick={handleUpdateJournal}>Обновить журнал и закрыть</button>
          </div>
        </div>
        <button className="popup__close charSheetPopup__close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}