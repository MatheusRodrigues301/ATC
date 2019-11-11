import React from 'react'

export default function Step3(props){
    
    const next = () =>
    {
        props.nextStep()
    }

    const back = () =>
    {
        props.previousStep()
    }

    return(
    <>
            <p>Você se considera o que? </p>
            <form>    
                <div className="radio-group">
                    <input  type="radio" value="1" name="genero" />
                    <label>Masculino</label>
                </div>
                <div className="radio-group">
                    <input  type="radio" value="2" name="genero" />
                    <label>Feminino</label>
                </div>
                <div className="radio-group">
                    <input  type="radio" value="3" name="genero" />
                    <label>Outros</label>
                </div>
                
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => back()}>Anterior</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
    </>
    )
}