import React, { useState } from 'react'
import InputMask from 'react-input-mask'

export default function Step6(props) {
    const [cel, setCel] = useState('')

    const saveValues = (e) => {
        e.preventDefault()
        props.addDetail("phoneNumber", cel)
    }

    const next = (e) =>
    {
        if(cel !== ''){
            saveValues(e)
            props.nextStep()
        }
    }

    const back = () =>
    {
        props.previousStep()
    }


    return (
        <>
            <p>Só mais alguns dados..</p>

            <form>
                <InputMask mask="(99) 99999-9999" placeholder="Celular" value={cel} onChange={(e) => setCel(e.target.value)} />
                <input placeholder="Data" type="date" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}