import React, {Component} from 'react';
import './styles.scss'

export default class Submit_button extends Component {
    render() {
        return(
            <div className={`submit-button-div d-flex justify-content-center align-items-center`}>
                <button className={`submit-button`} type={`${this.props.type}`}>{this.props.content}</button>
            </div>
        )
    }
}