import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';


import Type from './components/type/type';
import Card from './components/card/card';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: '#fcaa67',
      gridGap: '.25em'
    }
  }

  handleColorChange = (color) => {
    this.setState({
      backgroundColor:color,
    });
  }

  handleGapChange = () => {
    const gap = this.state.gridGap === '.25em' ? '.5em' : '.25em';
    this.setState({
      gridGap: gap
      })
  }

  render() {

    const style = {
      main : {
        height: '100%',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: this.state.gridGap,
        backgroundColor: this.state.backgroundColor,
        transition: 'background-color 1s ease-out'
      },
    
    
    }
    return (
      <div className='main' style={style.main}>
        {/* <Type /> */}
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#1a535c'
        cols="3/11"
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#4ecdc4'
        cols='3/11'
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='3/11'
        />
         <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#1a535c'
        cols="3/7"
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#4ecdc4'
        cols='7/11'
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='3/7'
        />
         <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='7/11'
        />
      </div>
    );
  }
}

export default App;
