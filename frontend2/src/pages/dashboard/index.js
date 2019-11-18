import React from 'react'
import './dashboard.css'

import Car from '../../assets/car_icon.png'

export default function(props){
    return (
        <>
        <nav>
            <img src={Car} alt="Cadastrar carro" title="Cadastrar carro"/>
            <div id="driverInformation" name="driverInformation">
                <span>Nome</span>
            </div>
        </nav>
        <div className="container">
            
        </div>
        </>
    )
}