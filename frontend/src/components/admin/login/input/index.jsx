import React, {Component} from 'react';
import './styles.scss'

export default class Input extends Component {
    render() {
        return(
            <div className={`input-login-div d-flex flex-column`}>
                <label>{this.props.label}</label>
                <input className={`input-login`} type={`${this.props.type}`} placeholder={`${this.props.placeholder}`} />
            </div>
        )
    }
}