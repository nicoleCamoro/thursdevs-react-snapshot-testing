import React, { Component } from 'react';
import './dogMedia.css';

class DogMedia extends Component {
    render() {
        return (
            <div>
                {this.props.mediaType === 'img' ? (
                    <img src={this.props.dogURL} className="dog-media" />
                ) : (
                    <video
                        src={this.props.dogURL}
                        autoplay=""
                        muted=""
                        loop=""
                        className="dog-media"
                    />
                )}
            </div>
        );
    }
}

export default DogMedia;
