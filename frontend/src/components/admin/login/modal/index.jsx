import React, {Component} from 'react';
import './styles.scss'

import Input from "../input";
import SubmitButton from "../submit_button";
import Logo from "../../../../assets/images/logo.png";

export default class Modal extends Component {
    render() {
        return(
            <div className={`modal-login container d-flex justify-content-around flex-column `}>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <img src={Logo} alt={`Logo Mercearia`}/>
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`row mb-5`}>
                        <div className={`col d-flex justify-content-center align-items-center`}>
                            <Input type={`text`} placeholder={`e-mail`} label={`E-mail`}/>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col d-flex justify-content-center align-items-center`}>
                            <Input type={`password`} placeholder={`senha`} label={`Senha`} />
                        </div>
                    </div>
                    <div className={`row mt-2 d-flex justify-content-end align-items-center flex-row`}>
                        <div className={`col`}>Esqueceu a senha?</div>
                        <div className={`col`}>Termo de privacidade</div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <SubmitButton type={`submit`} content={`ENTRAR`} />
                    </div>
                </div>
            </div>
        )
    }
}