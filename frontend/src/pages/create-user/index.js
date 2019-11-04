import React, { useState } from 'react'
import './style.css'
import StepWizard from 'react-step-wizard';
import Step1 from './step-1'
import Step2 from './step-2'
import Step3 from './step-3'
import Step4 from './step-4'

export default ({ history }) => {
    let state = {}

    const changeState = (key, val) => {
        state[key] = val;
    }

    const redirectToLogin = () => {
        history.push('/')
    }

    return (
        <>
            <StepWizard>
                <Step1
                    changeState={(key, val) => changeState(key, val)}
                    redirectToLogin={() => redirectToLogin()}
                />
                <Step2
                    changeState={(key, val) => changeState(key, val)}
                    redirectToLogin={() => redirectToLogin()}
                />
                <Step3
                    changeState={(key, val) => changeState(key, val)}
                    redirectToLogin={() => redirectToLogin()}
                />
                <Step4
                    changeState={(key, val) => changeState(key, val)}
                    redirectToLogin={() => redirectToLogin()}
                />
            </StepWizard>
        </>
    )
}