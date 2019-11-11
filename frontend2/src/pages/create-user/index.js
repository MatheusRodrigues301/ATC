import React from 'react'
import StepWizard from 'react-step-wizard'


//WIZARDA STEPS
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import Finish from './finish'
import ('./create-user.css')


export default function CreateUser({history}){
    let personDetail = {}
    
    const returnToLogin = () => {
        history.push('/')
    }
    
    const addDetail = (key, value) =>{
        personDetail[key] = value;
    }

    return (
        <>
        <StepWizard>
            <Step1 login={() => returnToLogin()} addDetail={() => addDetail()} />
            <Step2 addDetail={() => addDetail()}/>
            <Step3 addDetail={() => addDetail()}/>
            <Step4 addDetail={() => addDetail()}/>
            <Step5 addDetail={() => addDetail()}/>
            <Finish login={() => returnToLogin()} />
        </StepWizard>
        </>
    )
}