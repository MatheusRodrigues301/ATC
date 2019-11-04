import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import './style.css'

export default (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const nextStep = (e) => {
        e.preventDefault();
        props.changeState("firstName", firstName)
        props.changeState("lastName", lastName)
    }

    return (
        <>
            <form>
                <label htmlFor="firstName">Nome *</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Digite seu Nome"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Sobrenome *</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Digite seu Sobrenome"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <button className="btn" onClick={() => props.redirectToLogin()}>Voltar</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="btn" onClick={e => nextStep(e)}>Proximo</button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}