import React, { useState } from 'react'

import Car from '../../assets/car_icon.png'
import Home from '../../assets/home.png'

import Validator from '../../util/validators'
import api from '../../services/api'
import './create-car.css'

export default function CreateCar(props) {
    const [plateNumber,setPlaca] = useState('')
    const [year, setAno] = useState('')
    const [model, setTipo] = useState('Tamanho da carga')
    const [carBrand, setMarca] = useState('')
    const [color, setCor] = useState('')

    const handlesubmit = (e) =>{
        e.preventDefault()
        api.post('/vehicle', {
            plateNumber,
            year,
            model,
            carBrand,
            color,
            ownerUser: localStorage.getItem('user_id')
        }).then(response => console.log(response.data))
    }

    const exit = () =>{
        localStorage.setItem('user_name','')
        localStorage.setItem('user_id','')
        props.history.push('/')
    }

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
                <section className="content">
                    <p>Veículo</p>
                    <form>
                        <div className="row row-mini">
                            <input className={""} placeholder="Placa" type="text" onChange={""} value={plateNumber} onChange={(e) => setPlaca(e.target.value)} />
                            <input className={""} placeholder="Ano" type="text" onChange={""} value={year} onChange={(e) => setAno(e.target.value)} />
                        </div>
                        <div className="row">
                            <select value={model} onChange={(e) => setTipo(e.target.value)}>
                                <option value="pequena">Pequena</option>
                                <option value="Media">Media</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                        <div className="row row-mini">
                            <input className={""} placeholder="Marca" type="text" onChange={""}  value={carBrand} onChange={(e) => setMarca(e.target.value)}/>
                            <input className={""} placeholder="Cor" type="text" onChange={""} value={color} onChange={(e) => setCor(e.target.value)} />
                        </div>
                        <div className="btn-area">
                            <button className="btn" type="button" onClick={() => props.history.push('/dashboard')}>Cancelar</button>
                            <button className="btn" type="button" onClick={(e) => handlesubmit(e)}>Cadastrar</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}