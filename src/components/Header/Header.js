import logo from '../../images/logo.png';
import React from 'react';
import { useHistory } from 'react-router-dom';
let mailText='';
export default function Header( props) {
  let buttonText = '';
  
  const history = useHistory();
  if(props.loggedIn){
    mailText=localStorage.getItem('mail');
    buttonText='Выход'
  } else {
    mailText='';
    if(props.isRegisterVisible){
      buttonText='Вход'
    } else {
      buttonText='Регистрация'
    }
  } 

  function signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('mail');
    history.push('/sign-in');
  }

  function handleClick(){
    if(props.loggedIn){
      signOut()
      props.setLoggedIn(false)
    } else {
      if(props.isRegisterVisible){
    // localStorage.removeItem('mail');
        history.push('/sign-in');
      } else {
        history.push('/sign-up');
      }
    }
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__block">
        <p id='headCap' className="header__caption">{mailText}</p>
        <button id="utton" type='button' onClick={handleClick} className="header__button"> {buttonText} </button>
      </div>
    </header>
  );
}

