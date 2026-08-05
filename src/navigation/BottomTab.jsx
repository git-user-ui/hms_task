import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Profile from '../screens/profile/Profile';
import { colors } from '../themes/colors';
import ChatScreen from '../screens/chat/ChatScreen';
import CustomTabBar from '../components/CustomTabbar';
import AppointmentStack from './AppointMentStack';

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
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Appointment" component={AppointmentStack} />
    </Tab.Navigator>
  );
}
