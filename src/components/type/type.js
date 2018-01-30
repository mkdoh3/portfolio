import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Type extends Component {

    render() {
        return (
            <Typist>
                <span>Hello World, I'm Michael</span><br/>
                <span>I'm a full-stack web developer</span><br/>
                <span>I'm Curious</span>
                <Typist.Backspace count={7} delay={400} />
                <span>Passionate</span>
                <Typist.Backspace count={10} delay={400} />
                <span>Willing and Able</span>
            </Typist>
        )
    }
} 