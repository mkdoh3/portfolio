import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class Nav extends Component {
    constructor(props) {
        super(props)

        this.state={hidden: true}
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({hidden: false})
        }, this.props.wait);
    }
    render(){
        return (
            <FontAwesome
                name='hand-o-down'
                size='2x'
                style= {this.state.hidden ? {display: 'none'} : {display:'initial'}}
                onClick={this.props.onClick}
            />
        )
    }
}

export default Nav;