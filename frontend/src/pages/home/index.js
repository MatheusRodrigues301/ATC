import React, {useState} from 'react'
import './home.css'
import Logo from '../../assets/logo1.png'
import api from '../../services/api'

export default function Home({history}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login =  async (e) =>{
        e.preventDefault()
        await api.post('/login-driver-user', {
            email,
            password
        }).then((user) => {
            console.log(user.data)
            history.push('/dashboard')
            localStorage.setItem('user_name',user.data.name)
            localStorage.setItem('user_id',user.data._id)   
        })
        .catch((err) => console.log(err))
        
    }

    return(
        <>
        <div className="container">
        <img src={Logo} alt="Logo" className="logo" />
        <section className="content">
            <p>Obtenha <strong>transportes</strong> e ganhe mais <strong>facilidade</strong> e <strong>agilidade</strong> no seu gerencimento</p>
            <form id="login" className="login">
                <label>Email *</label>
                <input type="Email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>   
                <label>Senha *</label>
                <input type="Password" id="senha" name="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="btn-area">
                    <button className="btn" type="button" onClick={(e) => login(e)}>Entrar</button>
                    <button className="btn" type="button" onClick={() => history.push('/create-user')}>Cadastre-se</button>
                </div>
            </form>
        </section>
        </div>
        </>
    )
}
