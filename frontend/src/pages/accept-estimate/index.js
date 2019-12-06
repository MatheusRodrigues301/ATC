import React, {useState, useEffect} from 'react'

import Car from '../../assets/car_icon.png'
import Home from '../../assets/home.png'
import api from '../../services/api'
import './create-car.css'
export default function SelectCar(props) {
    const [vehicles, setVehicles] = useState([]) 
    //console.log(props.match.params)

    const exit = () => {
        localStorage.setItem('user_name', '')
        localStorage.setItem('user_id', '')
        props.history.push('/')
    }

    useEffect(() => {
        async function loadEstimates() {
            const user_id = localStorage.getItem('user_id')
            const response = await api.get('/vehicle', {
                headers: { user_id }
            })
            console.log(response.data)
            setVehicles(response.data)

        }

        loadEstimates()
    }, [])

    const handlesubmit = async (e) => {
        const {itemId} = props.match.params
        console.log(itemId)
        const response = await api.post(`/cargo-infos/estimate`,{
           estimate_id:itemId,
           status: true,
        })
        props.history.push('/dashboard')
        console.log(response)
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
                    <p>Com qual veículo deseja realizar a entrega?</p>
                    <form>
                        <div className="row">
                            <select>
                               {vehicles.map((item) =>(
                                    <option key={item._id}>{item.carBrand}</option>
                               ))}
                            </select>
                        </div>
                        <div className="btn-area">
                            <button className="btn" type="button" onClick={() => props.history.push('/dashboard')}>Cancelar</button>
                            <button className="btn" type="button" onClick={(e) => handlesubmit(e)}>Selecionar</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}