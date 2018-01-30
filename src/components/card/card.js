import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import img from '../../assets/images/cta_dash.JPG';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            margin: '.25em',
            backgroundColor: '#f7fefe'
        }
    }

    handleOnMouseOver = () => {
        this.setState({
            backgroundColor:  '#f7fff7',
            margin: '1em'
        });
        this.props.handleColorChange(this.props.color);
    }
    handleOnMouseLeave = () => {
        this.setState({
            backgroundColor: '#f2f2f2',
            margin: '.25em'
        });
        this.props.handleColorChange('#fcaa67');
    }

    render() {
        const style = {
            card: {
                margin: this.state.margin,
                gridColumn: this.props.cols,
                backgroundColor: this.state.backgroundColor,
                transition: 'all .7s ease-in-out'
            
            }
        }
        return (
            <div className={this.props.class} onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} style={style.card} >
                <h4>Project 1</h4>
                <p>blah blah blah blah blah balh ablhalblahlablablah balh </p>
                <div className="image-wrapper">
                    <img src={img}/>
                </div>
            </div>
        )
    }
}

export default Card;