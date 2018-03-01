import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
      author : ''
      }    
  }

  loadImage = () => {

    const asyncfun = async () => {
      const randomNmb = this.getRandomInt(200, 800);
      try{
        const dataFet = await fetch('https://picsum.photos/list');
        const data = await dataFet.json();
        this.setState({
        picture: `https://picsum.photos/${data[randomNmb].filename}`,
        author: data[randomNmb].author
        })
      }
      catch (error) {
        console.log('error:', error)
        }
      }
      asyncfun();
    }

 getRandomInt = (min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
   
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Picsum</h1>
          <button onClick={this.loadImage}>Random Pic</button>
          <Image src={this.state.picture} name={this.state.author}/>
      </div>
    );
  }
}

export default App;
