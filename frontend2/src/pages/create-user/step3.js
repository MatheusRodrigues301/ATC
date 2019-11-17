import React from 'react'

export default function Step3(props){
    const [genero,setGenero] = React.useState('');

    const saveValues = (e) =>{
        e.preventDefault()
        props.addDetail("genero",genero)
    }

    const next = (e) =>
    {
        if(genero !== ''){
            saveValues(e)
            props.nextStep()
        }
    }

    const back = () =>
    {
        props.previousStep()
    }

    return(
    <>
            <p>Você se considera o que? </p>
            <form>    
                <div className="radio-group error">
                    <input  type="radio" value="masculino" name="genero" onChange={(e) => setGenero(e.target.value)} />
                    <label>Masculino</label>
                </div>
                <div className="radio-group">
                    <input  type="radio" value="feminino" name="genero" onChange={(e) => setGenero(e.target.value)} />
                    <label>Feminino</label>
                </div>
                <div className="radio-group">
                    <input  type="radio" value="outros" name="genero" onChange={(e) => setGenero(e.target.value)} />
                    <label>Outros</label>
                </div>
                
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={(e) => next(e)}>Proximo</button>
                </div>
            </form>
    </>
    )
}