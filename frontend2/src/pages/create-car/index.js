import React, { useState } from 'react'

import Car from '../../assets/car_icon.png'
import Home from '../../assets/home.png'

import Validator from '../../util/validators'
import './create-car.css'

export default function CreateCar(props) {
    const [placa,setPlaca] = useState('')
    const [ano, setAno] = useState('')
    const [tipo, setTipo] = useState('Tamanho da carga')
    const [marca, setMarca] = useState('')
    const [cor, setCor] = useState('')


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
                <section className="content">
                    <p>Veículo</p>
                    <form>
                        <div className="row row-mini">
                            <input className={""} placeholder="Placa" type="text" onChange={""} />
                            <input className={""} placeholder="Ano" type="text" onChange={""} />
                        </div>
                        <div className="row">
                            <select>
                                <option value="pequena">Pequena</option>
                                <option value="Media">Media</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                        <div className="row row-mini">
                            <input className={""} placeholder="Marca" type="text" onChange={""} />
                            <input className={""} placeholder="Cor" type="text" onChange={""} />
                        </div>
                        <div className="btn-area">
                            <button className="btn" type="button" onClick={() => props.history.push('/dashboard')}>Cancelar</button>
                            <button className="btn" type="button" onClick={""}>Cadastrar</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}