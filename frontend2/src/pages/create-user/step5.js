import React from 'react'
import validator from '../../util/validators'

export default function Step4(props){
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    
    const confirmPasswordValid = () =>{
        return confirmPassword === password
    }

    const validPassword = () =>{
        if(validator("password",password) && confirmPasswordValid)
            return true
        else
            return false
    }
    
    const saveValues = (e) =>{
        if(validPassword()){
            e.preventDefault()
            props.addDetail('Password', password)
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
            <p>{`Vamos criar uma senha, ${props.nome()}`}</p>
            <span>Sua senha deve conter letras maiusculas, minusculas e numeros</span>
            <form>
                
                <input className={password !== '' && !validator("password",password) && "error"} placeholder="Senha" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className={confirmPassword !== '' && !confirmPasswordValid() && "error"} placeholder="Confirmar Senha" type="password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}