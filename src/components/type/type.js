import React, { Component } from 'react';
import Typist from 'react-typist';

const Type = () => {
    return (
        <Typist>
            <span>Hi, I'm Michael.</span><br/>
            <span>I'm a learner.</span>
            <Typist.Backspace count={8} delay={20} />
            <span>thinker.</span>
            <Typist.Backspace count={8} delay={40} />
            <span>creator.</span>
            <Typist.Backspace count={8} delay={200} />
            <span style={{fontWeight: 'bold'}}>web developer.</span>
        </Typist>
    )
}

export default Type;