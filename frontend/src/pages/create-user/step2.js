import React from 'react'
import validator from '../../util/validators'

export default function Step2(props){
    const [email,setEmail] = React.useState('')    

    const valideForm = () =>{
        if(validator("email",email))
            return true;
        else
            return false
    }

    const saveValues = (e) => {
        if(valideForm()){
            e.preventDefault()
            props.addDetail("email", email)
            return true;
        }
        else
            return false;
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
        <p>{`Certo, Qual o seu email,  ${props.nome()}?`}</p>

            <form>
                
                <input className={email !== '' && !validator('email', email) && "error"} placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}