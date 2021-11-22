import React from 'react';
import './styles.scss'
import {Link} from "react-router-dom";

export default function Card(props) {
    return(
        <div className={`card-home`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center card-title`}>{props.section}</div>
                </div>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <i className={`ri-user-line icon`} />
                    </div>
                </div>
                <div className={`row`}>
                    <Link className={`col d-flex justify-content-center align-items-center card-button`} to={props.to}>Editar</Link>
                </div>
            </div>
        </div>
    )
}