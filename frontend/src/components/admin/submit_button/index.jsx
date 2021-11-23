import React from 'react';
import {Link} from 'react-router-dom'
import './styles.scss'

export default function Submit_button (props) {
    return(
        <div className={`submit-button-div d-flex justify-content-center align-items-center`}>
            <Link to={props.linkTo}>
                <button className={`submit-button btn`} type={`${props.type}`}>{props.content}</button>
            </Link>
        </div>
    )
}