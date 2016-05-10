import * as React from "react";
import './_Tic.scss'
export default class Tic extends React.Component {
    render() {
        return (
            <div className="ttt"><span>{this.props.value}</span></div>
        )
    }
}
