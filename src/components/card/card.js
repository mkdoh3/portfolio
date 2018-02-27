import React, { Component } from 'react';

import CardBack from '../card_back/card_back';
import './card.css';

const cardFronts = {
    project1 : {
       
        title: 'MoCP.me',
        text: 'The MoCP.me app uses computer vision as a way to interact with the Museum of Contemporary Photography (MoCP) collection on user-generated terms. Public release coming soon! '
    },
    project2 :  {
        title: 'Care By Numbers',
        text: 'Care by Numbers is a full-stack app that provides a detailed, data-driven look into the alarming healthcare cost disparity that exists from state to state and hospital to hospital.',
       
    },
    project3 :  {
        title: 'CTA Dash',
        text: 'CTA-Dash is a client-side application that allows users to store and track their Chicago bus routes, local weather, and news on a sleek dashboard style interface.'

    },
    project4 :  {
        title: 'CRUD Burgers',
        text: 'Small full-stack project utilizing mySQL and Sequelize.'
    },
    project5 :  {
        title: 'Better Amazon',
        text: "Amazon, but better.. It's shopping with a CLI on Node!",
    },
    project6 :  {
        title: 'Liri',
        text: 'A "language interpreter" that lives in Node. Find music, read tweets, and more!',
    },
    project7 :  {
        title: 'Star Words',
        text: "A SW themed hangman game. One of my first projects and still lots of fun!",
    }
}


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            margin: '.25em',
            backgroundColor: '#f7fefe',
            boxShadow: '1px 1px 6px 2px rgba(0, 0, 0, 0.4)',
            isHovered: false
        }
    }

    handleOnMouseOver = () => {
        this.setState({
            transition: 'all .35s ease-in-out',
            padding: '2em',
            backgroundColor:  '#f7fff7',
            margin: '.05em',
            boxShadow: '3px 2px 8px 4px rgba(0, 0, 0, 0.4)',
            isHovered: true
        });
        this.props.handleColorChange(this.props.color);
    }
    handleOnMouseLeave = () => {
        this.setState({
            backgroundColor: '#f2f2f2',
            margin: '.25em',
            boxShadow: '1px 1px 6px 2px rgba(0, 0, 0, 0.4)',
            isHovered: false
        });
        this.props.handleColorChange('#43bccd');
    }

    render() {
        const project = this.props.project;
        const style = {
            card: {
                boxShadow: this.state.boxShadow,
                margin: this.state.margin,
                backgroundColor: this.state.backgroundColor,
                transition: this.state.transition
                
            }
        }
        return (
            <div className='project-card' id={this.props.project} onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} style={style.card} >
                {!this.state.isHovered ? <h5>{cardFronts[project].title}</h5> : <CardBack project={project} />}
                 {!this.state.isHovered && <p>{cardFronts[project].text}</p>}
            </div>
        )
    }
}

export default Card;