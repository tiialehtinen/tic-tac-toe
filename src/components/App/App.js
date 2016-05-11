import React from 'react'
import ReactDOM from "react/lib/ReactDOM";
import './_App.scss'
import Tic from '../Tic/Tic'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        var state = {
            players: [
                {
                    id: 0,
                    name: 'X',
                    wins: 0,
                    positions: [],
                    turns: 0,
                    current: false,
                    next: false,
                },
                {
                    id: 1,
                    name: 'O',
                    wins: 0,
                    positions: [],
                    turns: 0,
                    current: false,
                    next: false,
                }
            ],
            winner: null,
            winCombinations: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
        this.state = state

        this.setCurrentPlayer(0)
        this.setNextPlayer()
    }

    getCurrentPlayer() {
        var currentPlayer = this.state.players.filter(function (player) {
            if (player.current) {
                return player
            }
        })
        return currentPlayer[0]
    }

    getNextPlayer() {
        var nextPlayer = this.state.players.filter(function (player) {
            if (player.next) {
                return player
            }
        })
        return nextPlayer[0]
    }

    handlePropagation(TicId) {
        var currentPlayer = this.getCurrentPlayer()
        currentPlayer.turns += 1
        currentPlayer.positions.push(TicId)

        this.savePlayer(currentPlayer)

        var nextPlayer = this.getNextPlayer()

        this.setCurrentPlayer(nextPlayer.id)
        this.setNextPlayer()
    }

    setCurrentPlayer(index) {
        this.state.players.map(function (_p) {
            if( _p.current ) {
                _p.current = false
                _p.next = true
            }
        })
        this.state.players[index].current = true
        this.state.players[index].next = false
    }

    setNextPlayer() {
        this.state.players.map(function (player) {
            if (!player.current) {
                player.next = !player.current
                player.current = !player.next
            }
        })

    }

    savePlayer(player) {
        this.state.players.map(function (_player) {
            if (_player.id === player.id) {
                _player = player
            }
        })
    }

    render() {
        var Tics = []

        for (var i = 1; i <= 9; i++) {
            Tics.push(<Tic
                key={i}
                id={i}
                currentPlayer={this.getCurrentPlayer.bind(this)}
                onClick={this.handlePropagation.bind(this)}

            />)
        }
        return (
            <div className="main">
                <div className="tics">
                    {Tics}

                </div>
                <div>
                    <div>Current Player is <strong>{this.getCurrentPlayer().name}</strong></div>
                    <div>Next Player is <strong>{this.getNextPlayer().name}</strong></div>

                </div>

            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
