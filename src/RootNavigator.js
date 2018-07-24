import { createBottomTabNavigator } from 'react-navigation';

import trackingNavigator from './tracking/trackingNavigator';
import insightsNavigator from './insights/insightsNavigator';
import goalsNavigator from './goals/goalsNavigator';
import Dummy from './Dummy';
import Drawer from './Drawer';

export default createBottomTabNavigator(
    {
        Tracker: trackingNavigator,
        Insights: insightsNavigator,
        Goals: goalsNavigator,
        Dummy: Dummy,
        Drawer: Drawer
    }
)