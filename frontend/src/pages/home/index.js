import React from 'react'
import './style.css'

import logo from '../../assets/logo1.png'

export default (props) =>{
    return (
        <>
        <div className="container">
            <img src={logo} />
            <div className="home">
                <form>
                    <input placeholder="email" type="email" />
                    <input placeholder="senha" type="password" />
                    <button>Entrar</button>
                </form>
            </div>
        </div>
        </>
    )
}