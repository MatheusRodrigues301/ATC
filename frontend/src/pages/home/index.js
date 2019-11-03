import React, { useState } from 'react'
import api from '../../services/api'
import './style.css'

export default (props) => {
    const [email, password, setEmail, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDafault();

        await api.post('/login-driver-user', {
            email,
            password
        })
            .then(({ data }) => {
                localStorage.setItem('user', data._id)
            })
            .catch(error => {
                console.log("TCL: error", error)
            })
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

                <button className="btn" type="submit">Entrar</button>
            </form>
            <br />
            <button className="btn">Cadastre-se</button>
        </>
    )
}