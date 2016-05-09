import React from 'react'
import ReactDOM from "react/lib/ReactDOM";
import './_App.scss'
import Tic from '../Tic/Tic'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    generateTics() {
        var Tics = []
        for (var i = 1; i <= 9; i++) {
            Tics.push(<Tic key={i} id={i}/>)
        }
        return Tics
    }

    render() {
        var _Tics = this.generateTics()
        console.log(this)
        return (
            <div className="main">
                <div>{_Tics}</div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
