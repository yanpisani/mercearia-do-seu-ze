import React from 'react';
import './styles.scss'
import Card from "../../../../components/admin/card";

const Cards = [
    {
    section: 'Funcionários',
    link: '/admin/funcionarios'
    },
]

export default function Home() {
    return(
        <div className={`admin-home`}>
            <div className={`admin-card`}>
                {
                    Cards.map((card, i) => {
                        return (
                            <div className={`teste`}>
                                <div className={`testee`}>
                                    <Card section={card.section} to={card.link} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}