import React from 'react';
import './styles.scss'

import Input from "../../../components/admin/input";
import SubmitButton from "../../../components/admin/submit_button";
import Logo from "../../../assets/images/logo.png";

export default function Modal_pass_recovery () {
    return(
        <div className={`password-recovery`}>
            <div className={`modal-pass-recovery container d-flex justify-content-around flex-column `}>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <img src={Logo} alt={`Logo Mercearia`}/>
                    </div>
                </div>
                <form>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`row mb-5`}>
                            <div className={`col d-flex justify-content-center align-items-center`}>
                                <Input type={`email`} placeholder={`e-mail`} label={`E-mail`}/>
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col d-flex justify-content-center align-items-center`}>
                            <SubmitButton type={`submit`} content={`RECUPERAR SENHA`} />
                        </div>
                    </div>
                </form>
                <div className={`d-flex justify-content-center align-items-center`}>
                    <a href={`/entrar`}>
                        <i className={`ri-arrow-left-line`} />Voltar
                    </a>
                </div>
            </div>
        </div>
    )
}