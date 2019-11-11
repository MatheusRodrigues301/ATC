import React from 'react'
import './home.css'

export default function Home({history}){

    const redirectToCreate = () => {
        history.push('/create-user')
    }

    return(
        <>
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
        </>
    )
}
