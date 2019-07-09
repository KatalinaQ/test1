import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  
  state = {
    isLoginOpen: true,
    isRegisterOpen: false
  };

  render()
  {
    return (
      <React.Fragment>
        <RegisterBox/>
      </React.Fragment>
    );
  };
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      confirmPassword: ''
    };
  }

  submitRegister() {
    console.log('test');
  }

  handleUsernameInputOnChange = (event) => {
    if (event.target.value){
      this.setState({username: event.target.value});
    }
    
  }

  handlePasswordInputOnChange = (event) => {
    this.setState({password: event.target.value});
  }

  handlePasswordConfirmOnChange = (event) => {
    this.setState({confirmPassword: event.target.value});
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" 
              onChange={this.handleUsernameInputOnChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" 
            name="password" 
            className="login-input" 
            placeholder="Password" 
            onChange={this.handlePasswordInputOnChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="passwordConfirm"
              name="passwordConfirm"
              className="login-input"
              placeholder="Password" 
              onChange={() => this.handleInputOnChange('passwordConfirm')}/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister}>Register</button>
        </div>
      </div>
    );
  }
}

export default App;
