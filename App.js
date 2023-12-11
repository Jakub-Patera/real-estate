import { View, Text, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PropertyDetail from "./screens/PropertyDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
