import React from 'react';
import './styles.scss'

export default function Card() {
    return(
        <div className={`card-home`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center card-title`}>Funcionário</div>
                </div>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <i className={`ri-user-line icon`} />
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center card-button`}>Editar</div>
                </div>
            </div>
        </div>
    )
}