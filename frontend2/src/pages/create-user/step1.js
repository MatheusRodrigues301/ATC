import React from 'react'

export default function Step1(props){
    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');

    const next = () =>
    {
        props.nextStep()
    }

    return (
        <>   
            <p>Qual o seu nome? </p>
            <form>    
                <input placeholder="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input placeholder="Sobrenome" type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={() => props.login()}>Cancelar</button>
                    <button className="btn" type="button" onClick={() => next()}>Proximo</button>
                </div>
            </form>
        </>
    )
}