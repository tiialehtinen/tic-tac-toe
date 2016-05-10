import React from 'react'
import ReactDOM from "react/lib/ReactDOM";
import './_App.scss'
import Tic from '../Tic/Tic'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPlayer: {},
            winner: null,
            tic: {
                clicked: false,
                value: '+'
            }
        }
    }

    setPlayer(player) {
        this.setState({
            clicked: true,
            // value: this.props.player.name
        })
    }

    setCurrentPlayer(player) {
        var state = this.state
        state.currentPlayer = player
        this.setState(state)
    }

    render() {
        var Tics = []

        var _Players = [
            {
                id: 1,
                name: 'X',
                wins: 0,
                positions: []
            },
            {
                id: 2,
                name: 'O',
                wins: 0,
                positions: []
            }
        ]

        for (var i = 1; i <= 9; i++) {
            Tics.push(<Tic
                key={i}
                value='+'
                player={() => setPlayer()}
            />)
        }
        return (
            <div className="main">
                <div className="tics">{Tics}</div>
                <div>
                    Choose a player
                    <input onClick={() => this.setCurrentPlayer(_Players.filter(function (player) {return player.id === 1})[0])} type="radio" name="player"/> X player
                    <input onClick={() => this.setCurrentPlayer(_Players.filter(function (player) {return player.id === 2})[0])} type="radio" name="player"/> O player

                </div>

            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
