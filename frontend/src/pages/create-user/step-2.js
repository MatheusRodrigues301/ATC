import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import './style.css'

export default (props) => {
    const [email, setEmail] = useState('');

    // const saveInfos = (e) => {
    //     e.preventDefault();
    //     props.changeState("email", email)
    // }

    return (
        <>
            <p>
                Olá, {props.name}
            </p>
            <form>
                <label htmlFor="email">Email *</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <button className="btn" onClick={() => props.previousStep()}>Voltar</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="btn" onClick={() => props.nextStep()}>Proximo</button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}