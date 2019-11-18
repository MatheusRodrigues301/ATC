import React from 'react'
import './home.css'
import Logo from '../../assets/logo1.png'
export default function Home({history}){

    const redirectToCreate = () => {
        history.push('/create-user')
    }

    return(
        <>
        <div className="container">
        <img src={Logo} alt="Logo" className="logo" />
        <section className="content">
            <p>Obtenha <strong>transportes</strong> e ganhe mais <strong>facilidade</strong> e <strong>agilidade</strong> no seu gerencimento</p>
            <form id="login" className="login">
                <label>Email *</label>
                <input type="Email" id="email" name="email" />   
                <label>Senha *</label>
                <input type="Password" id="senha" name="senha" />
                <div className="btn-area">
                    <button className="btn" type="button">Entrar</button>
                    <button className="btn" type="button" onClick={() => redirectToCreate()}>Cadastre-se</button>
                </div>
            </form>
        </section>
        </div>
        </>
    )
}
