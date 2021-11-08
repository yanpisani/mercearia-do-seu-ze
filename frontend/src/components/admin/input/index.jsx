import React from 'react';
import './styles.scss'

export default function Input (props) {
    return(
        <div className={`input-login-div d-flex flex-column`}>
            <label>{props.label}</label>
            <input className={`input-login ${props.class}`} type={`${props.type}`} placeholder={`${props.placeholder}`} />
        </div>
    )
}