import { createMaterialTopTabNavigator } from 'react-navigation';

import DailyTrackerScreen from './daily/DailyTrackerScreen';
import MonthlyTrackerScreen from './monthly/MonthlyTrackerScreen';

export default createMaterialTopTabNavigator(
    {
        DailyTracker:{ screen: DailyTrackerScreen,
        navigationOptions: {
            title:'Daily'
        } 
        },
        MonthlyTracker:{ screen:MonthlyTrackerScreen,
        navigationOptions: {
            title:'Monthly'
        } },
    },
    {
        initialRouteName: 'DailyTracker',
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
      }
)