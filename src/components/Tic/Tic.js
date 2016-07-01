import React from 'react';
import './_Tic.scss'

export default class Tic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            value: '+'
        }
    }

    setTicPlayer() {
        if (this.props.appLock) {
            return
        }
        var state = this.state;
        if( state.clicked ) {
            return
        }
        state = {
            clicked: !state.clicked,
            value: this.props.currentPlayer().name
        }
        this.setState(state)
        this.props.onClick(this.props.id)
    }

    render() {
        // DON'T forget to bind onClick method to itself, will fall silently
        return (
            <div className="ttt">
                <span onClick={this.setTicPlayer.bind(this)}>{this.state.value}</span>
            </div>
        )
    }
}
