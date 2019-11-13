import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login'
import CreateUser from './pages/CreateUser/CreateUser'
import CreateUserStep2 from './pages/CreateUser/CreateUserStep2'
import CreateCargo from './pages/CreateCargo/CreateCargo'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        CreateUser,
        CreateUserStep2,
        CreateCargo
    })
);

export default Routes;