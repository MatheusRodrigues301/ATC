import React, { useState } from 'react'
import api from '../../services/api'
import './style.css'
import Grid from '@material-ui/core/Grid';
import StepWizard from 'react-step-wizard';
import Step1 from './step-1'

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
            </StepWizard>
        </>
    )
}