import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './label.css';

class Label extends PureComponent {
    render() {
        return (
            <figcaption className="dog-caption">
                {this.props.caption}
            </figcaption>
        );
    }
}

Label.propTypes = {
    caption: PropTypes.string,
};

export default Label;
