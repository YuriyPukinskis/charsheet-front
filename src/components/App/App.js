import '../../App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import {api} from '../../utils/api';
import {CurrentUserContext} from'../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import EditCharsheetPopup from '../EditCharsheetPopup/EditCharsheetPopup';
import AddCharacterPopup from '../AddPlacePopup/AddCharacterPopup';
import ShowRollResult from '../ShowRollResult/ShowRollResult';
import CharSheetPopup from '../CharSheetPopup/CharSheetPopup';
import React from 'react';
import Login from '../Authorisation/Login/Login';
import Register from '../Authorisation/Register/Register';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth.js';
import { createBrowserHistory } from 'history';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import cross from '../../images/cross.png';
import check from '../../images/check.png'
export const history = createBrowserHistory()

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function handleLogin (email, password){
    auth.authorize(email, password, handleFailedLogin)
    .then((data) => {
      if (data.token){
        const newPromise = new Promise(function (resolve, reject) {
          resolve(setLoggedIn(true))
        })
        newPromise
        .then(function (value) { 
          history.push('/');
          history.go();
        })
      } 
    })   
    .catch(err => console.log(err));
  }

  function handleRegister(password,email,name){
    auth.register( password, email, name).then((res) => {
      if(res){
          handleSetInfoToolTipImg(check)
          handleSetInfoToolTipText('Вы успешно зарегистрировались!')
          history.push('/sign-in');
          handleSetIsInfoToolTipOpen();
      } else {
        this.setState({
          message: 'Что-то пошло не так!'
        })
      }
    })
    .catch(err => console.log(err));
  }



  function handleFailedLogin(){
    handleSetInfoToolTipImg(cross)
    handleSetInfoToolTipText('Что-то пошло не так! Попробуйте еще раз.')
    handleSetIsInfoToolTipOpen()
  }

  function checkToken () {
      const token = localStorage.getItem('token');
    if (token){
      auth.getContent(token).then((res) => {
        if (res){
          setLoggedIn(true)
          history.push('/');
        };
      })
      .catch((err) => {
        console.log(err); 
      });
    }    
  }
 
  const [currentUser, setCurrentUser] = useState({avatar:'',about:'',name:'',_id:''});
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen]=useState(false);
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen]=useState(false);
  const [isEditCharsheetPopupOpen,setIsEditCharsheetPopupOpen]=useState(false);
  const [isAddCharacterPopupOpen,setIsAddCharacterPopupOpen]=useState(false);
  const [isShowRollResultOpen, setIsShowRollResultOpen]=useState(false);
  const [isBigImageOpen,setIsBigImageOpen]=useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen]=useState(false);

  const [rollText, setRollText]=useState('');
  const [rollResult,setRollResult]=useState();
  
  // const [selectedCard,setSelectedCard]=useState({name: '', link: ''});;
  const [selectedCard,setSelectedCard]=useState({});
  const [selectedCard2,setSelectedCard2]=useState({});

  const [cards,setCards]=useState([]);
  const [infoToolTipText,setInfoToolTipText]=useState('')
  const [infoToolTipImg, setInfoToolTipImg]=useState(cross)
  const [isRegisterVisible, setIsRegisterVisible]=useState(true)

  function prepareCard(newCard){
    // alert("help "+newCard.inventory)
    const name=newCard.name;
    const link=newCard.url;
    const numberOfLikes=newCard.likes.length;
    const likes=newCard.likes;
    const cardId=newCard._id;
    const elementLikes = newCard.likes
    const ownerID = newCard.owner;
    const race = newCard.race;
    const profession = newCard.profession;
    const level = newCard.level;
    const strength = newCard.strength;
    const dexterity = newCard.dexterity;
    const constitution = newCard.constitution;
    const intelligence = newCard.intelligence;
    const wisdom = newCard.wisdom;
    const charisma = newCard.charisma;

    const useMagicDeviceBonusLevel = newCard.useMagicDeviceLevel;
    const survivalBonusLevel = newCard.survivalLevel;
    const spellcraftBonusLevel = newCard.spellcraftLevel;
    const senseMotiveBonusLevel = newCard.senseMotiveLevel;
    const professionBonusLevel = newCard.professionLevel;
    const perceptionBonusLevel = newCard.perceptionLevel;
    const knowledgeBonusLevel = newCard.knowledgeLevel;
    const healBonusLevel = newCard.healLevel;
    const flyBonusLevel = newCard.flyLevel;
    const disguiseBonusLevel = newCard.disguiseLevel;
    const diplomacyBonusLevel = newCard.diplomacyLevel;
    const climbBonusLevel = newCard.climbLevel;
    const appraiseBonusLevel = newCard.appraiseLevel;
    const swimBonusLevel = newCard.swimLevel;
    const stealthBonusLevel = newCard.stealthLevel;
    const sleightOfHandBonusLevel = newCard.sleightOfHandLevel;
    const rideBonusLevel = newCard.rideLevel;
    const performBonusLevel = newCard.performLevel;
    const linguisticsBonusLevel = newCard.linguisticsLevel;
    const intimidateBonusLevel = newCard.intimidateLevel;
    const handleAnimalBonusLevel = newCard.handleAnimalLevel;
    const escapeArtistBonusLevel = newCard.escapeArtistLevel;
    const disableDeviceBonusLevel = newCard.disableDeviceLevel;
    const craftBonusLevel = newCard.craftLevel;
    const bluffBonusLevel = newCard.bluffLevel;
    const acrobaticsBonusLevel = newCard.acrobaticsLevel;
    const game = newCard.game;
    const notes = newCard.notes;
    const inventory = newCard.inventory;
    const weight = newCard.weight;

    const armourName = newCard.armourName;
    const shieldName = newCard.shieldName;
    const armourBonus = newCard.armourBonus;
    const shieldBonus = newCard.shieldBonus;
    const armourType = newCard.armourType;
    const shieldType = newCard.shieldType;
    const armourPenalty = newCard.armourPenalty;
    const shieldPenalty = newCard.shieldPenalty;
    const armourSpellFail = newCard.armourSpellFail;
    const shieldSpellFail = newCard.shieldSpellFail;

    return {name,link,numberOfLikes,cardId,elementLikes,ownerID,likes,race,profession,level,strength,dexterity,constitution,intelligence,wisdom,charisma,
      useMagicDeviceBonusLevel,
      survivalBonusLevel,
      spellcraftBonusLevel,
      senseMotiveBonusLevel,
      professionBonusLevel,
      perceptionBonusLevel,
      knowledgeBonusLevel,
      healBonusLevel,
      flyBonusLevel,
      disguiseBonusLevel,
      diplomacyBonusLevel,
      climbBonusLevel,
      appraiseBonusLevel,
      swimBonusLevel,
      stealthBonusLevel,
      sleightOfHandBonusLevel,
      rideBonusLevel,
      performBonusLevel,
      linguisticsBonusLevel,
      intimidateBonusLevel,
      handleAnimalBonusLevel,
      escapeArtistBonusLevel,
      disableDeviceBonusLevel,
      craftBonusLevel,
      bluffBonusLevel,
      acrobaticsBonusLevel,
      game,
      notes,
      inventory,
      weight,
      
      armourName,
      shieldName,
      armourBonus,
      shieldBonus,
      armourType,
      shieldType,
      armourPenalty,
      shieldPenalty,
      armourSpellFail,
      shieldSpellFail
    }
  }

  useEffect(() => {
    checkToken();
    api.initProfileFomServer()
      .then(function(res){
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err); 
      });
      if (cards.length===0){
        api.getInitialCards()
          .then(function(res){
            const card=[]
            res.forEach(element => {
              
              card.push(prepareCard(element))
              // alert('did it help '+prepareCard(element).inventory)
            })
            setCards(card) 
            })
          .catch((err) => {
            console.log(err); 
          });
      }
  }, [null])


  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }
  function handleAddCharacterClick(){
    setIsAddCharacterPopupOpen(true)
  }
  function handleShowRollResultClick(){
    setIsShowRollResultOpen(!isShowRollResultOpen)
  }
  function handleCardClick(){
    setIsBigImageOpen(true)
  }
  function handleUpdateCharacterSheetClick(card){
    setSelectedCard2(card)
    setIsEditCharsheetPopupOpen(true)
  }

  function closeAuthPopup(){
    setIsInfoToolTipOpen(false);
    history.go();
  }
  
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCharacterPopupOpen(false);
    setIsBigImageOpen(false);
    setIsEditCharsheetPopupOpen(false);
    setSelectedCard({})
  }

  function handleUpdateUser(data) {
    api.postLoginToServer(data.name, data.about,data.email)
      .then((updatedUser)=>{
        setCurrentUser(updatedUser.data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err); 
      });
  }

  function handleUpdateAvatar(data) {
    api.postAvatarToServer(data.avatar)
      .then((updatedUser)=>{
        setCurrentUser(updatedUser.data);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err); 
      });
  }

  function handleApploadCard(data) {
    api.postCardToServer(data.name,data.url,data.race,data.profession,data.level,data.strength,data.dexterity,data.constitution,data.intelligence,data.wisdom,data.charisma,
      data.useMagicDeviceBonusLevel,
      data.survivalBonusLevel,
      data.spellcraftBonusLevel,
      data.senseMotiveBonusLevel,
      data.professionBonusLevel,
      data.perceptionBonusLevel,
      data.knowledgeBonusLevel,
      data.healBonusLevel,
      data.flyBonusLevel,
      data.disguiseBonusLevel,
      data.diplomacyBonusLevel,
      data.climbBonusLevel,
      data.appraiseBonusLevel,
      data.swimBonusLevel,
      data.stealthBonusLevel,
      data.sleightOfHandBonusLevel,
      data.rideBonusLevel,
      data.performBonusLevel,
      data.linguisticsBonusLevel,
      data.intimidateBonusLevel,
      data.handleAnimalBonusLevel,
      data.escapeArtistBonusLevel,
      data.disableDeviceBonusLevel,
      data.craftBonusLevel,
      data.bluffBonusLevel,
      data.acrobaticsBonusLevel,
      data.game,
      data.notes,
      data.inventory
    )
      .then((newCard)=>{
        const newCardToPage = prepareCard(newCard.data)
        setCards([newCardToPage, ...cards]); 
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err); 
      });
  }

  function handleUpdateCard(data){
    
    api.updateCardOnServer(data.name,data.url,data.race,data.profession,data.level,data.strength,data.dexterity,data.constitution,data.intelligence,data.wisdom,data.charisma,
      data.useMagicDeviceBonusLevel,
      data.survivalBonusLevel,
      data.spellcraftBonusLevel,
      data.senseMotiveBonusLevel,
      data.professionBonusLevel,
      data.perceptionBonusLevel,
      data.knowledgeBonusLevel,
      data.healBonusLevel,
      data.flyBonusLevel,
      data.disguiseBonusLevel,
      data.diplomacyBonusLevel,
      data.climbBonusLevel,
      data.appraiseBonusLevel,
      data.swimBonusLevel,
      data.stealthBonusLevel,
      data.sleightOfHandBonusLevel,
      data.rideBonusLevel,
      data.performBonusLevel,
      data.linguisticsBonusLevel,
      data.intimidateBonusLevel,
      data.handleAnimalBonusLevel,
      data.escapeArtistBonusLevel,
      data.disableDeviceBonusLevel,
      data.craftBonusLevel,
      data.bluffBonusLevel,
      data.acrobaticsBonusLevel,
      data.game,
      data.notes,
      data.inventory,
      data.weight,

      data.armourName,
      data.shieldName,
      data.armourBonus,
      data.shieldBonus,
      data.armourType,
      data.shieldType,
      data.armourPenalty,
      data.shieldPenalty,
      data.armourSpellFail,
      data.shieldSpellFail,
      data.cardId)
      .then((newCard) => {
        const newCardToArr=prepareCard(newCard.data)
        const newCards = cards.map((c) => c.cardId === data.cardId ? newCardToArr : c);
        setCards(newCards);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err); 
      });
  }

  function handleSetIsInfoToolTipOpen() {
    setIsInfoToolTipOpen(true)
  }
  function handleSetInfoToolTipText(str) {
    setInfoToolTipText(str)
  }
  function handleSetInfoToolTipImg(elem) {
    setInfoToolTipImg(elem)
  }
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked){
      api.likeCardOnServer(card.cardId)
      .then((newCard) => {
        const newCardToArr=prepareCard(newCard.data)
        const newCards = cards.map((c) => c.cardId === card.cardId ? newCardToArr : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err); 
      });
    }else{
      api.dislikeCardOnServer(card.cardId)
      .then((newCard) => {
        const newCardToArr=prepareCard(newCard.data)
        const newCards = cards.map((c) => c.cardId === card.cardId ? newCardToArr : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err); 
      });
    }
    
  } 
  function handleCardDelete(card) {
    api.deleteCardFromServer(card.cardId)
    .then(() => {
      const newCards = cards.filter((c) => c.cardId !== card.cardId);
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err); 
    });
  } 


  return (
    
    <CurrentUserContext.Provider value={currentUser}>
      
    <div>
    <div className="page">
    <BrowserRouter history={history}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} isRegisterVisible={isRegisterVisible} />
      <main className="content">
        <Switch>
          <Route path="/sign-up">
            <Register handleRegister={handleRegister} setIsRegisterVisible={setIsRegisterVisible} />
          </Route>
          <Route path="/sign-in">
            < Login handleLogin={handleLogin} setIsRegisterVisible={setIsRegisterVisible} />
          </Route>
          <ProtectedRoute path="/" loggedIn={loggedIn} 
            component={()=>(<Main onEditProfile={handleEditProfileClick} onAddCharacter={handleAddCharacterClick}
              onEditAvatar={handleEditAvatarClick} handleCardClick={handleCardClick}
              cards={cards} onCardClick={setSelectedCard} selectedCard={selectedCard}
              onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditCharsheet={handleUpdateCharacterSheetClick}/>)} />
      
        </Switch>
      </main>
      <Footer />
      
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <AddCharacterPopup isOpen={isAddCharacterPopupOpen} onClose={closeAllPopups} onApploadCard={handleApploadCard}/>
      
      <ShowRollResult isOpen={isShowRollResultOpen} rollText={rollText} rollResult={rollResult} onClose={handleShowRollResultClick} />

      <EditCharsheetPopup card={selectedCard2} isOpen={isEditCharsheetPopupOpen} onClose={closeAllPopups} onUpdateCard={handleUpdateCard}  />

      <CharSheetPopup handleRoll={handleShowRollResultClick} setRollText={setRollText} setRollResult={setRollResult} card={selectedCard} isOpen={true} isBigImageOpen={isBigImageOpen} onClose={closeAllPopups} onUpdateCard={handleUpdateCard} />
      <InfoToolTip isOpen={true} text={infoToolTipText} img={infoToolTipImg} isInfoToolTipOpen={isInfoToolTipOpen} onClose={closeAuthPopup}  />
      </BrowserRouter>
  </div>
  </div>
  </CurrentUserContext.Provider>
  );
  
}


export default App;