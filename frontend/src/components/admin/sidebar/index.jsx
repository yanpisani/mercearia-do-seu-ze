import React from 'react';
import "./styles.scss";

import Logo from "../../../assets/images/logo.png";

export default function Sidebar(){
    return(
        <div className={`Sidebar`}>
            <div className={`container container-sidebar`}>
                <div className={`row`}>
                    <div className={`col`}>
                        <img src={Logo} class="img-fluid my-4" alt="Mercearia do Seu Zé"></img>
                    </div>
                </div>

                <div className={`row`}>
                    <div className={`row`}>
                        <div className={`col`}>
                            <button type="button" class="btn btn-primary d-grid gap-2 col-6 mx-auto sidebar-btn">home</button>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`col`}>
                            <button type="button" class="btn btn-primary d-grid gap-2 col-6 mx-auto sidebar-btn">func</button>
                        </div>
                    </div> 

                    <div className={`row`}>
                        <div className={`col`}>
                            <button type="button" class="btn btn-primary d-grid gap-2 col-6 mx-auto sidebar-btn">stoc</button>
                        </div>
                    </div> 
                </div>

                <div className={`row`}>
                        <div className={`col`}>
                            <button type="button" class="btn btn-primary d-grid gap-2 col-6 mx-auto quit-btn">bye</button>
                        </div>
                </div> 
            </div>
        </div>
    )   
}

