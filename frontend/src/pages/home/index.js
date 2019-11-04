import React, { useState } from 'react'
import api from '../../services/api'
import './style.css'
import Grid from '@material-ui/core/Grid';

export default ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    const redirectToCreate = () => {
        history.push('/create-user');
    }

    return (
        <>
            <p>
                Obtenha <strong>transportes</strong> e ganhe mais <strong>facilidade</strong> e <strong>agilidade</strong> no seu gerencimento
            </p>

            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="senha">Senha *</label>
                <input
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <button className="btn" onClick={e => redirectToCreate(e)}>Cadastre-se</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className="btn" type="submit">Entrar</button>
                    </Grid>
                </Grid>
            </form>
            <br />
        </>
    )
}