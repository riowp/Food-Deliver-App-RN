import React from "react";
import MyDrawer from "./navigator/Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Font from "./helper/Font";
import { MainLayout } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  Font();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen
            name="Home"
            component={MyDrawer}
            screenOptions={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Screen" component={MyDrawer} options={{headerShown: false}} />
//     <Stack.Screen name="Settings" component={Settings} />
//   </Stack.Navigator>
// </NavigationContainer>
