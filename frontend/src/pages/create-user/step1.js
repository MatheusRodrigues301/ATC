import React from 'react'
import validator from '../../util/validators'

export default function Step1(props){
    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');

    const valideForm = () =>{
        if(validator("name",nome) && validator("name",nome))
            return true;
        else
            return false
    }


    const saveValues = (e) => {
        if(valideForm()){
            e.preventDefault()
            props.addDetail("nome", nome) 
            props.addDetail("sobrenome",sobrenome)  
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

    return (
        <>   
            <p>Qual o seu nome? </p>
            <form>    
                <input className={nome !== '' && !validator("name",nome) && ('error')} placeholder="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input className={sobrenome !== '' && !validator("name",sobrenome) && ('error')} placeholder="Sobrenome" type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => props.login()}>Cancelar</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
        </>
    )
}