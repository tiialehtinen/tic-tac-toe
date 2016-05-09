import * as React from "react";
import './_Tic.scss'
export default class Tic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    handleClick() {
        this.setState({clicked:true})
        console.log(this.state)
    }
    render() {
        return (
            <div className="ttt"><span onClick={() => this.handleClick()}>+</span></div>
        )
    }
}
