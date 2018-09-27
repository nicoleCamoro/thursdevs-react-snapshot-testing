import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import DogFigure from './containers/DogFigure';

import ADJECTIVES from './data';

class App extends Component {
    state = {
        dogURL: null,
        mediaType: null,
        caption: 'Finding doggos.',
    };

    createCaption() {
        return `A ${
            ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
        } Doggo!`;
    }

    getDog() {
        console.log('Get dog');
        //Fetch dog data
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const dogURL = data.url;
                let mediaType;

                // Check file type
                if (dogURL.endsWith('mp4')) {
                    //Create video element
                    mediaType = 'video';
                } else {
                    mediaType = 'img';
                }

                const caption = this.createCaption();

                this.setState({
                    caption,
                    dogURL,
                    mediaType,
                });
            })
            .catch(err =>
                this.setState({
                    caption: 'Doggos Unavailable!',
                })
            );
    }

    onClick = () => {
        this.getDog();
    };

    render() {
        return (
            <div className="App">
                <DogFigure
                    dogURL={this.state.dogURL}
                    mediaType={this.state.mediaType}
                    caption={this.state.caption}
                />
                <Button onClick={this.onClick} />
            </div>
        );
    }
}

export default App;
