import React from 'react'
import StepWizard from 'react-step-wizard'


//WIZARDA STEPS
import Step1 from './step1'
import Step2 from './step2'
import ('./create-user.css')


export default function CreateUser({history}){
    const returnToLogin = () => {
        history.push('/')
    }
    
    return (
        <>
        <StepWizard>
            <Step1 login={() => returnToLogin()} />
            <Step2 />
        </StepWizard>
        </>
    )
}