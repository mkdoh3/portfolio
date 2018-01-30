import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import img from '../../assets/images/cta_dash.JPG';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            zoom: '100%',
            backgroundColor: '#f7fefe'
        }
    }

    handleOnMouseOver = () => {
        this.setState({
            zoom: '110%',
            backgroundColor:  '#f7fff7'
        });
        this.props.handleColorChange(this.props.color);
        this.props.handleGapChange();
    }
    handleOnMouseLeave = () => {
        this.setState({
            zoom: '100%',
            backgroundColor: '#f2f2f2'
        });
        this.props.handleColorChange('#fcaa67');
        this.props.handleGapChange();

    }

    render() {
        //lodash returns a new function that can only be called once every 300ms, this will limit searchBar to not be running with every single keystroke.. looks a lot more natural
        const handleOnMouseOver = _.debounce(() => { this.handleOnMouseOver() }, 300);
    //lodash returns a new function that can only be called once every 300ms, this will limit searchBar to not be running with every single keystroke.. looks a lot more natural
        const handleOnMouseLeave = _.debounce(() => { this.handleOnMouseLeave() }, 300);

        const style = {
            card: {
                zoom: this.state.zoom,
                width: '100%',
                gridColumn: this.props.cols,
                justifySelf: 'center',
                backgroundColor: this.state.backgroundColor,
                transition: 'all 1s ease-in'
            },
            img: {
                height: '300px',
                width: '150px'
            }
        }
        return (
            <div onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} style={style.card}>
                <div>
                    <h4>Proect 1</h4>
                    <p>blah blah blah blah blah balh ablhalblahlablablah balh </p>
                    <img src={img} style={style.img} />
                </div>  
            </div>
        )
    }
}

export default Card;