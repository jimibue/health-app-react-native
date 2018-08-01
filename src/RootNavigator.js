import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import trackingNavigator from './tracking/trackingNavigator';
import insightsNavigator from './insights/insightsNavigator';
import goalsNavigator from './goals/goalsNavigator';
import Dummy from './Dummy';
import Drawer from './Drawer';

import Login from './login/Login';

const App = createBottomTabNavigator(
    {
        Tracker: trackingNavigator,
        Insights: insightsNavigator,
        Goals: goalsNavigator,
        Dummy: Dummy,
        Drawer: Drawer
    }
)

const LoginStack = createSwitchNavigator({
    Login: Login,
    App: App
},{
    initialRouteName:'Login'
})

//export default LoginStack
export default LoginStack

// export default createBottomTabNavigator(
//     {
//         Tracker: trackingNavigator,
//         Insights: insightsNavigator,
//         Goals: goalsNavigator,
//         Dummy: Dummy,
//         Drawer: Drawer
//     }
// )