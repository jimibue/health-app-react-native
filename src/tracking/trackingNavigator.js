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
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },

            style: {
              backgroundColor: '#303e48',
              backgroundColor: '#e45f56',
            },
          }
      }
)