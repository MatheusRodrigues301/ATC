import React from 'react'

export default function Step2(props){

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
            <p>Certo, Qual o seu email? </p>

            <form>
                
                <input placeholder="Email" type="email" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
        </>
    )
}