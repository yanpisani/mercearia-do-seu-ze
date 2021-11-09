import React from 'react';
import './styles.scss'

import Input from "../../../components/admin/input";
import SubmitButton from "../../../components/admin/submit_button";
import Logo from "../../../assets/images/logo.png";

export default function Modal_login (){
    return(
        <div className={`login`}>
            <div className={`modal-login container d-flex justify-content-around flex-column `}>
                <div className={`row`}>
                    <div className={`col d-flex justify-content-center align-items-center`}>
                        <img src={Logo} alt={`Logo Mercearia`}/>
                    </div>
                </div>
                <form>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`row mb-5`}>
                            <div className={`col d-flex justify-content-center align-items-center`}>
                                <Input class={`email`} type={`email`} placeholder={`e-mail`} label={`E-mail`}/>
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className={`col d-flex justify-content-center align-items-center`}>
                                <Input class={`password`} type={`password`} placeholder={`senha`} label={`Senha`} />
                            </div>
                        </div>
                        <div className={`row mt-2 d-flex flex-row`}>
                            <div className={`col d-flex justify-content-start`}><a href={`/recuperar-senha`}>Esqueceu a senha?</a></div>
                            <div className={`col d-flex justify-content-end`}><a href={`/termo-de-privacidade`}>Termo de privacidade</a></div>
                        </div>
                    </div>
                    <div className={`row mt-5`}>
                        <div className={`col d-flex justify-content-center align-items-center`}>
                            <SubmitButton type={`submit`} content={`ENTRAR`} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}