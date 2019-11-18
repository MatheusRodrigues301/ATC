import React from 'react'
import InputMask from 'react-input-mask'
import validator from '../../util/validators'

export default function Step4(props){
    const [cpf, setCPF] = React.useState('')
    const [cnh, setCNH] = React.useState('')
    
    const valideForm = () =>{
        if(validator("CPF",cpf))
            return true;
        else
            return false
    }

    const saveValues = (e) =>{
        if(valideForm()){
            e.preventDefault()
            props.addDetail("CPF", cpf)
            props.addDetail("CNH", cnh)
            return true
        }
        else
            return false
    }

    const next = (e) =>
    {
        if(saveValues(e))
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
                
                <InputMask className={cpf !== '' && !validator("CPF",cpf) && 'error'} mask="999.999.999-99" placeholder="CPF" type="text" value={cpf} onChange={(e) => setCPF(e.target.value)}/>
                <InputMask className={cnh !== '' && !validator("CNH",cnh) && 'error'} placeholder="CNH" type="number" value={cnh} onChange={(e) => setCNH(e.target.value)}/>
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}