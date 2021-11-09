import React, {  Component } from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Footer from "./components/Footer";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
    showPopup: false,
  };

inputHandler = (e) => {
  this.setState ({
    [e.target.name]: e.target.value
  });
};

popupHandler = (e) => {
  e.preventDefault();
  this.setState({ showPopup: true });
};

render () {
  const props = {
    first: this.state.firstname,
    last: this.state.lastname,
    phone: this.state.phone,
    role: this.state.role,
    message: this.state.message,
  }

  return (
    <div>
      <Header />
      <Form change={this.inputHandler} submit={this.popupHandler} />
      <View {...props}/>
      {this.state.showPopup && <Popup {...props}/>}
      {/* IF YOU PUT EXCLAMATION POINT IN FRONT OF THE STATEMENT ABOVE, IT WILL TAKE IT AS TRUE. TRY!!!! */}
      <Footer />
    </div>
  );
}
}
export default App;