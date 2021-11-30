import React from 'react';
import "./styles.scss";

import Logo from "../../../assets/images/logo.png";

const ListSidebar = [
    {
        title: 'Início',
        icon: 'ri-home-3-line',
        redirect: '/admin/inicio',
    },
    {
        title: 'Funcionários',
        icon: 'ri-booklet-line',
        redirect: '/admin/funcionarios',
    },
    {
        title: 'Estoque',
        icon: 'ri-archive-line',
        redirect: '/admin/estoque',
    },
    {
        title: 'Vendas',
        icon: 'ri-shopping-cart-line',
        redirect: '/admin/vendas',
    }
]

export default function Sidebar(){
    return(
        <aside className={`Sidebar`}>
            <div className={`container container-sidebar`}>
                <div className={`row`}>
                    <div className={`col`}>
                        <img src={Logo} className={`img-fluid my-4`} alt="Mercearia do Seu Zé" />
                    </div>
                </div>
                <div className={`row mb-4`}>
                    <div className={`col`}>
                        <a href={`/admin/perfil`}>
                            <ul>
                                <li>
                                    <span className={`ri-user-line`} />
                                    <span className={`perfil`}>Meu Perfil</span>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
                <ul>
                    {
                        ListSidebar.map((item, index) => {
                            return (
                                <a href={item.redirect}>
                                    <li key={index.toString()} >
                                       <span className={item.icon} />
                                       <span className={`sidebar-title`}>{item.title}</span>
                                    </li>
                                </a>
                            )
                        })
                    }
                </ul>

                <a href={`/entrar`}>
                    <ul>
                        <li>
                            <span className={`ri-arrow-left-line`} />
                            <span className={`back`}>Sair</span>
                        </li>
                    </ul>
                </a>
            </div>
        </aside>
    )
}

