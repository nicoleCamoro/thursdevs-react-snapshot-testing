import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
    render() {
        return (
            <button className="dog-btn" onClick={this.props.onClick}>
                Get Random Doggo
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
