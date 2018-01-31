import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import FontAwesome from 'react-fontawesome'

import Card from './components/card/card';
import Name from './components/name/name';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: '#43bccd',
    }
  }

  handleColorChange = (color) => {
    this.setState({
      backgroundColor:color,
    });
  }

  handleOnClick = () => {
    scrollToComponent(this.refs.main, { 
      offset: 450,
      align: 'top'
    });
  }

  render() {

    const style = {
      main : {
        backgroundColor: this.state.backgroundColor
      }
    }
    return (
      <div className='main' ref='main' style={style.main}>
        <Name 
          onClick={this.handleOnClick.bind(this)}
        />
        <Card
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#662e9b'
          cols="3/11"
          project='project1'/>
        <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#ea3546'
          cols="3/11"
          project='project2'/>
        <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#f86624'
          cols='3/11'
          project='project3'/>
         <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#f9c80e'
          cols="3/7"
          project='project4'/>
        <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#662e9b'
          cols='7/11'
          project='project5'/>
        <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#ea3546'
          cols='3/7'
          project='project6'/>
         <Card 
          handleColorChange={this.handleColorChange}
          handleGapChange={this.handleGapChange}
          color='#f86624'
          cols='7/11'
          project='project7'/>
          <p className='bottom-text'>Built using React with 
          <FontAwesome 
           name='heart'
          />
          </p>
      </div>
    );
  }
}

export default App;
