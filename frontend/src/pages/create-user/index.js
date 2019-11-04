import React, { useState } from 'react'
import api from '../../services/api'
import './style.css'
import Grid from '@material-ui/core/Grid';
import StepWizard from 'react-step-wizard';

export default ({ history }) => {
    const [email, password, setEmail, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDafault();

        await api.post('/login-driver-user', {
            email,
            password
        })
            .then(({ data }) => {
                localStorage.setItem('user', data._id)
                history.push('/dashboard')
            })
            .catch(error => {
                console.log("TCL: error", error)
            })
    }

    const redirectToLogin = () => {
        history.push('/');
    }

    return (
        <>
            <StepWizard>
            </StepWizard>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <button className="btn" onClick={e => redirectToLogin(e)}>Voltar</button>
                </Grid>
                <Grid item xs={6}>
                    <button className="btn" type="submit">Proximo</button>
                </Grid>
            </Grid>
        </>
    )
}