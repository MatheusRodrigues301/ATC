import React from 'react'

export default function Step2(props){
    const [email,setEmail] = React.useState('')    

    const saveValues = (e) => {
        e.preventDefault()
        props.addDetail("email", email)
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
        <p>{`Certo, Qual o seu email,  ${props.nome()}?`}</p>

            <form>
                
                <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}