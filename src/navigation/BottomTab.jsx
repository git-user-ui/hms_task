import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Profile from '../screens/profile/Profile';
import ChatScreen from '../screens/chat/ChatScreen';

// Components
import CustomTabBar from '../components/CustomTabbar';

// Stacks
import AppointmentStack from './AppointMentStack';
import HomeStack from './HomeStack';

//themes
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
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Appointment" component={AppointmentStack} />
    </Tab.Navigator>
  );
}
