import React from 'react'

export default function Step4(props){

    const next = () =>
    {
        props.nextStep()
    }

    const back = () =>
    {
        props.previousStep()
    }

    return (
        <>
            <p>Vamos criar uma senha.. </p>

            <form>
                
                <input placeholder="Senha" type="password" />
                <input placeholder="Confirmar Senha" type="password" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
        </>
    )
}