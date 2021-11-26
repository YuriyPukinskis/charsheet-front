import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState } from 'react';
import { useEffect } from 'react';
import {CurrentUserContext} from'../../contexts/CurrentUserContext';
import React from 'react';

export default function EditProfilePopup(props){
  const [name,setName] = useState('');
  const [description,setDescription]=useState('');
  const [email,setEmail] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
      email: email
    });
  } 

  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]); 
  return(
    <PopupWithForm name="profile-popup" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input id="name-input" className="popup__input profile-popup__input_name" name="name" type="text" minLength="2" maxLength="20" required value={name}
         onChange={handleNameChange} />
      <span id="name-input-error" className="popup__input-error" /> 
      <input id="occupation-input" className="popup__input profile-popup__input_occupation" name="job" type="text" minLength="2" maxLength="200" required value={description} onChange={handleDescriptionChange} />
      <span id="occupation-input-error" className="popup__input-error" /> 
      <input id="email-input" className="popup__input profile-popup__input_occupation" name="email" type="text" minLength="2" maxLength="200" required value={email} onChange={handleEmailChange} />
      <span id="email-input-error" className="popup__input-error" /> 
      <button className="popup__button profile__submit" type="submit" name="submit">Сохранить</button>
    </PopupWithForm>
  )
}