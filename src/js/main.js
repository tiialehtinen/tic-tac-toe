import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss');

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>Yooooooo</h1>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('ttt'));
