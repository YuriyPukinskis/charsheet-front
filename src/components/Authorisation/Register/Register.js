import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.setIsRegisterVisible(true);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }



  handleSubmit(e){
    e.preventDefault();
      const { password, email,name } = this.state;
      this.props.handleRegister(password,email,name);
  } 

  render(){
    return(
      <div className="register">
        <p className="register__welcome">
          Регистрация
        </p>
        <form onSubmit={this.handleSubmit} className="register__form">
        <input className="register__input" required id="name" name="name" placeholder="Имя" type="text" value={this.state.name} onChange={this.handleChange} />
          <input className="register__input" required id="email" name="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleChange} />
          <input className="register__input" required id="password" name="password" placeholder="Пароль" type="password" value={this.state.password} onChange={this.handleChange} />
          <div className="register__button-container">
            <button type="submit" className="register__button">Зарегистрироваться</button>
          </div>
        </form>
        <div className="register__signup">
          <p>Уже зарегистрированы? </p>
          <Link to="/sign-in" className="register__link">Войти</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);
