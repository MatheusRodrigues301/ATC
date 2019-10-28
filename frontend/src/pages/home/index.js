import React from 'react'
import './style.css'

import logo from '../../assets/logo1.png'

export default (props) =>{
    return (
        <>
        <div className="container">
            <div className="home">
                <form>
                    <img src={logo} />
                    <input placeholder="email" type="email" />
                    <input placeholder="senha" type="password" />
                    <div>
                        <button>Cadastre-se</button>
                        <button>Entrar</button>      
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}