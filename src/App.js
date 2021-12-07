import React, {  Component } from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Footer from "./components/Footer";
import Notes from './components/Notes';
import axios from 'axios';

class App extends Component {
  state = {
    inputData: {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: ""
  },
    showPopup: false,
    data: [],
  };

componentDidMount() {
  axios
  .get("http://localhost:3001/notes")
  .then(res => this.setState({data: res.data}));
}

inputHandler = (e) => {
  this.setState ({
    inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
  });
};

popupHandler = (e) => {
  e.preventDefault();
  this.setState({ showPopup: true });
};

postHandler = () => {
  axios
  .post("http://localhost:3001/notes", this.state.inputData)
  .then((res) => {
    console.log(res);
    this.setState({ showPopup: false });
    window.location.reload();
  })
  .catch((error) => console.log(error)); 
  };

render () {
  return (
    <div>
      <Header />
      <div className="formArea">
      <Form change={this.inputHandler} submit={this.popupHandler} />
      <View {...this.state.inputData}/>
      </div>
      {this.state.showPopup && 
      <Popup {...this.state.inputData} post={this.postHandler}/>}
      {this.state.data.map((note) => (
        <Notes {...note}/>
      ))}
      <Footer />
    </div>
  );
}
}

export default App;