import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login'
import CreateUser from './pages/Create-user'
import CreateCargo from './pages/Create-cargo'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        CreateUser,
        CreateCargo
    })
);

export default Routes;