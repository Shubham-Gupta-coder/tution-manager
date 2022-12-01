import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Student from "./screens/Student";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Student"
          component={Student}
          options={{ title: "Student" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
