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
    }
  }

  handleColorChange = (color) => {
    this.setState({
      backgroundColor:color,
    });
  }

  render() {

    const style = {
      main : {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        backgroundColor: this.state.backgroundColor,
        transition: 'all 1s ease-out'
      },
    
    
    }
    return (
      <div className='main' style={style.main}>
        {/* <Type /> */}
        <Card
         handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#1a535c'
        cols="2/12"
        class='project-1'
        > <Type />
        </Card>
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#1a535c'
        cols="2/12"
        class='project-1'
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#4ecdc4'
        cols='2/12'
        class='project-2'
        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='2/12'
        class='project-3'

        />
         <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#1a535c'
        cols="2/7"
        class='project-4'

        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#4ecdc4'
        cols='7/12'
        class='project-5'

        />
        <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='2/7'
        class='project-6'

        />
         <Card 
        handleColorChange={this.handleColorChange}
        handleGapChange={this.handleGapChange}
        color='#ba2d0b'
        cols='7/12'
        class='project-7'
        />
      </div>
    );
  }
}

export default App;
