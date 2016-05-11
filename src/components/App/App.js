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
            currentPlayer: '',
            nextPlayer: '',
            winner: null,
            totalTurns: 0,
            winCombinations: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ],
            appLock: false
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

    componentDidUpdate() {
        if (this.state.appLock) {
            return
        }
        if (this.state.totalTurns >= 5) {
            if (this.isPlayerWinner()) {
                var state = this.state
                state.winner = this.getCurrentPlayer().name
                state.appLock = true
                this.setState(state)
                return
            }
        }

        var nextPlayer = this.getNextPlayer()

        this.setCurrentPlayer(nextPlayer.id)
        this.setNextPlayer()
    }

    isPlayerWinner() {
        var {winCombinations} = this.state
        var {positions} =  this.getCurrentPlayer()
        var winner = false
        winCombinations.map(function (combo) {

            var diff = this.difference(combo, positions);
            if (diff.length === 0) {
                winner = true
            }

        }, this)

        return winner
    }

    difference(a1, a2) {
        var result = []
        for (var i = 0; i < a1.length; i++) {
            if (a2.indexOf(a1[i]) === -1) {
                result.push(a1[i])
            }
        }
        return result
    }

    handlePropagation(TicId) {
        if (this.state.appLock) {
            return
        }
        var currentPlayer = this.getCurrentPlayer()
        currentPlayer.turns += 1
        this.state.totalTurns += 1

        currentPlayer.positions.push(TicId)

        this.savePlayer(currentPlayer)

        this.forceUpdate()
        console.log('here' + Date.now())
    }

    setCurrentPlayer(index) {
        this.state.players.map(function (_p) {
            if (_p.current) {
                _p.current = false
                _p.next = true
            }
        })
        this.state.players[index].current = true
        this.state.players[index].next = false

        this.state.currentPlayer = this.state.players[index].name
    }

    setNextPlayer() {
        var nextPlayer = this.state.players.filter(function (player) {
            if (!player.current) {
                return player
            }
        })[0]
        nextPlayer.next = !nextPlayer.current
        nextPlayer.current = !nextPlayer.next

        this.state.nextPlayer = nextPlayer.name
        this.state.players[nextPlayer.id] = nextPlayer

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

        for (var i = 0; i < 9; i++) {
            Tics.push(<Tic
                key={i}
                id={i}
                currentPlayer={this.getCurrentPlayer.bind(this)}
                onClick={this.handlePropagation.bind(this)}
                appLock={this.state.appLock}

        />)
        }
        return (
            <div className="main">
                <div className="tics">
                    {Tics}

                </div>
                <div>
                    <div>Current Player is <strong>{this.state.currentPlayer}</strong></div>
                    <div>Next Player is <strong>{this.state.nextPlayer}</strong></div>
                    <div>Winner is <h1>{this.state.winner}</h1></div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
