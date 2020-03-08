import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../../components/Label';
import DogMedia from '../../components/DogMedia';
import './dogFigure.css';

class DogFigure extends Component {
    render() {
        return (
            <figure className="dog-figure">
                <DogMedia {...this.props} />
                <Label caption={this.props.caption} />;
            </figure>
        );
    }
}

DogFigure.propTypes = {
    caption: PropTypes.string,
    dogURL: PropTypes.string,
    mediaType: PropTypes.string,
};

export default DogFigure;
