import React from 'react'

export default function Step1(props){

    const next = () =>
    {
        props.nextStep()
    }

    return (
        <>   
            <p>Qual o seu nome? </p>
            <form>    
                <input placeholder="Nome" type="text" />
                <input placeholder="Sobrenome" type="text" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => props.login()}>Cancelar</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
        </>
    )
}