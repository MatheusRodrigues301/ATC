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
            <p>Só mais alguns dados? </p>

            <form>
                
                <input placeholder="CPF" type="text" />
                <input placeholder="CNH" type="text" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
        </>
    )
}