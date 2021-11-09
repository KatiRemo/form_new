import React, {  Component } from 'react';
import './App.css';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';

class App extends Component {
  state= {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  };


inputHandler = (e) => {
  this.setState ({
    [e.target.name]: e.target.value
  });
};

render () {
  return (
    <div>
      <Form change={this.inputHandler} />
      <View
      first = {this.state.firstname}
      last = {this.state.lastname}
      phone = {this.state.phone}
      role = {this.state.role}
      message = {this.state.message}
      />
    </div>
  );
}
};

export default App;
