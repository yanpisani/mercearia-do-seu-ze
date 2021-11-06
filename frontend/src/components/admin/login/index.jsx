import React, {Component} from 'react';
import './styles.scss';

import Modal from "./modal";

export default class Login extends Component {
    render() {
        return(
            <div className={`login`}>
                <Modal />
            </div>
        )
    }
}