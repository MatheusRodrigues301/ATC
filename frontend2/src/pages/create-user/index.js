import React from 'react'
import StepWizard from 'react-step-wizard'
import Logo from '../../assets/logo1.png'

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
        console.log(personDetail)
    }
    
    const personName = () => {
        return personDetail.nome
    }

    return (
        <>
        <div className="container">
            <img src={Logo} alt="Logo" className="logo" />
            <section className="content">
                <StepWizard>
                    <Step1 login={() => returnToLogin()} addDetail={(key,value) => addDetail(key,value)} />
                    <Step2 addDetail={(key,value) => addDetail(key,value)} nome={() => personName()}/>
                    <Step3 addDetail={(key,value) => addDetail(key,value)}/>
                    <Step4 addDetail={(key,value) => addDetail(key,value)}/>
                    <Step5 addDetail={(key,value) => addDetail(key,value)} nome={() => personName()}/>
                    <Finish login={() => returnToLogin()}/>
                </StepWizard>
            </section>
        </div>
        </>
    )
}