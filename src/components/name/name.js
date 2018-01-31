import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Type from '../type/type';
import Nav from '../nav/nav';
import './name.css';

class Name extends Component {
    render(){
        return (
            <div className='name-wrapper'>
                <div className='links'>
                    <a href='https://github.com/mkdoh3' target='_blank' rel="noopener noreferrer">
                        <FontAwesome 
                            name='github'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.2)', color: '#58355e' }}
                        />
                     </a>
                    <a href='www.linkedin.com/in/michaeldoh' target='_blank' rel="noopener noreferrer">
                        <FontAwesome 
                            name='linkedin'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.2)', color: '#58355e' }}
                        />
                    </a>
                    <a href='https://docs.google.com/document/d/1PmO8ozdf8Gi1b_wyUMcOUB4WpRS8IpFc0ZwN90XiD7U/edit?usp=sharing' target='_blank' rel="noopener noreferrer">
                        <FontAwesome 
                            name='file-text-o'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.2)', color: '#58355e' }}
                        />
                    </a>
                </div>
                <Type />
                <Nav 
                    wait={7000}
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}

export default Name;