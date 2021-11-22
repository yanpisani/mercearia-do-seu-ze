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
                    Cards.map((card, index) => {
                        return (
                            <Card key={index.toString()} section={card.section} to={card.link} />
                        )
                    })
                }
            </div>
        </div>
    )
}