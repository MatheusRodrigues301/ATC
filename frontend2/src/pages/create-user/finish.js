import React from 'react'

import Logo from '../../assets/success_icon.png'

export default function Step4(props){

    return (
        <>
            <div className="finish">
                <p>Tudo pronto :)</p>
                <img src={Logo}  />
                <button className="btn" onClick={() => props.login()}>Finalizar</button>
            </div>
        </>
    )
}