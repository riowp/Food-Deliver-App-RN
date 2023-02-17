import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './Drawer';
import Settings from '../Settings';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default MyStack