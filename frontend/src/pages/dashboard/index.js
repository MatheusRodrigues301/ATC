import React, { useState, useEffect } from 'react'
import './dashboard.css'

import Car from '../../assets/car_icon.png'
import Home from '../../assets/home.png'
import api from '../../services/api'
import './dashboard.css'

export default function (props) {
    const [estimates, setEstimates] = useState([])
    const exit = () => {
        localStorage.setItem('user_name', '')
        localStorage.setItem('user_id', '')
        props.history.push('/')
    }

    useEffect(() => {
        async function loadEstimates() {
            const user_id = localStorage.getItem('user_id')
            const response = await api.get('/dashboard-driver', {
                headers: { user_id }
            })
            console.log(response.data)
            setEstimates(response.data)

        }

        loadEstimates()
    }, [])


    return (
        <>
            <nav>
                <img src={Home} onClick={() => props.history.push('/dashboard')} alt="Cadastrar carro" title="Cadastrar carro" />
                <img src={Car} onClick={() => props.history.push('/create-car')} alt="Cadastrar carro" title="Cadastrar carro" />
                <div id="driverInformation" name="driverInformation">
                    <span onClick={() => exit()}>Sair</span>
                </div>
            </nav>
            <div className="container">
                <ul>
                    {
                        estimates.map(item => (
                            <li key={item._id}>
                                <span>Descrição: {item.serviceDescription}</span>
                                <strong>Preço: {item.price}</strong>
                                <div>
                                    <button>Accept</button>
                                    <button className="reject">Reject</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}