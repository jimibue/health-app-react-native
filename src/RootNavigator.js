import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import trackingNavigator from './tracking/trackingNavigator';
import insightsNavigator from './insights/insightsNavigator';
import goalsNavigator from './goals/goalsNavigator';
import Dummy from './Dummy';
import Drawer from './Drawer';

import Login from './login/Login';
import Passcode from './login/Passcode';

const App = createBottomTabNavigator(
    {
        Tracker: trackingNavigator,
        Insights: insightsNavigator,
        Goals: goalsNavigator,
        Dummy: Dummy,
        Drawer: Drawer
    }
)
const Pass = createStackNavigator ({
    Passcode: Passcode,
    Appz: App
},
{
    initialRouteName:'Passcode'
}
)

const LoginStack = createSwitchNavigator({
    Login: Login,
    Passcode: Passcode,
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