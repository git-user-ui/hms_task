import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Chat from '../screens/chat/Chat';
import Profile from '../screens/profile/Profile';
import Calender from '../screens/schedule/Calender';
import CustomTabBar from '../components/CustumTabbar';
import { colors } from '../themes/colors';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calender" component={Calender} />
    </Tab.Navigator>
  );
}
