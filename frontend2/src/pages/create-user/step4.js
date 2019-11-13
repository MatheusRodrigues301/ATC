import React from 'react'

export default function Step4(props){
    const [cpf, setCPF] = React.useState('')
    const [cnh, setCNH] = React.useState('')
    
    const saveValues = (e) =>{
        e.preventDefault()
        props.addDetail("CPF", cpf)
        props.addDetail("CNH", cnh)
    }

    const next = (e) =>
    {
        saveValues(e)
        props.nextStep()
    }

    const back = () =>
    {
        props.previousStep()
    }

    return (
        <>
            <p>Só mais alguns dados..</p>

            <form>
                
                <input placeholder="CPF" type="text" value={cpf} onChange={(e) => setCPF(e.target.value)}/>
                <input placeholder="CNH" type="text" value={cnh} onChange={(e) => setCNH(e.target.value)}/>
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}