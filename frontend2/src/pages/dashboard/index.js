import React from 'react'
import './dashboard.css'

import Car from '../../assets/car_icon.png'
import Home from '../../assets/home.png'
import './dashboard.css'

export default function (props) {
    return (
        <>
            <nav>
                <img src={Home} onClick={() => props.history.push('/dashboard')} alt="Cadastrar carro" title="Cadastrar carro" />
                <img src={Car} onClick={() => props.history.push('/create-car')} alt="Cadastrar carro" title="Cadastrar carro" />
                <div id="driverInformation" name="driverInformation">
                    <span>Nome</span>
                </div>
            </nav>
            <div className="container">

            </div>
        </>
    )
}