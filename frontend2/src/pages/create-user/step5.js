import React from 'react'

export default function Step4(props){
    const [password, setPassword] = React.useState()

    const saveValues = (e) =>{
        e.preventDefault()
        props.addDetail('Password', password)
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
            <p>{`Vamos criar uma senha, ${props.nome()}`}</p>

            <form>
                
                <input placeholder="Senha" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder="Confirmar Senha" type="password" />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}