import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser/CreateUser'
import CreateUserStep2 from './pages/CreateUser/CreateUserStep2'
import CreateUserStep3 from './pages/CreateUser/CreateUserStep3'
import CreateUserStep4 from './pages/CreateUser/CreateUserStep4'
import CreateUserStep5 from './pages/CreateUser/CreateUserStep5'
import CreateUserStepEnd from './pages/CreateUser/CreateUserStepEnd'
import CreateCargo from './pages/Cargo/CreateCargo'
import EditCargo from './pages/Cargo/EditCargo'
import Estimate from './pages/Estimate/Estimate'
import MyCargos from './pages/myCargos/myCargos'
import MyEstimates from './pages/myEstimates/myEstimates'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        CreateUser,
        CreateUserStep2,
        CreateUserStep3,
        CreateUserStep4,
        CreateUserStep5,
        CreateUserStepEnd,
        CreateCargo,
        EditCargo,
        Estimate,
        MyCargos,
        MyEstimates
    })
);

export default Routes;