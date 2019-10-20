import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppData from './AppData';
import { getBearerToken, pullFollowerRequest} from './getFollowerCount';

getBearerToken('', '')
    .then(pullFollowerRequest)

class App extends React.Component {
    loopPhotos() {
        let storedPhotos = [];

        for (var i = 0; i < AppData.imgArr.length; i++) {
            storedPhotos.push(<img key={i} src={AppData.imgArr[i].image} alt={AppData.imgArr[i].text}></img>)
        };

        return storedPhotos
    }

    render() {
        return (
            <div className="flex-container">
                <div className="photos"> 
                    {this.loopPhotos()}
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
