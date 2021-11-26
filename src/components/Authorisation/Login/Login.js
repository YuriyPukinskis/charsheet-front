import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.setIsRegisterVisible(false);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    if (!this.state.email || !this.state.password){
      return;
    }
    this.props.handleLogin(this.state.email, this.state.password, this.props.handleLog);
  }
  render(){
    return(
      <div className="login">
        <p className="login__welcome">
          Добро пожаловать!
        </p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input required id="email"  className="login__input" placeholder="E-mail" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          <input required id="password"  className="login__input" placeholder="Пароль" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <div className="login__button-container">
            <button type="submit" className="login__button">Войти</button>
          </div>
        </form>
        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="login__link">Зарегистрироваться</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
