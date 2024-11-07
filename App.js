import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReferralDashboard from "./screens/ReferralDashboard";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Referral Dashboard"
          component={ReferralDashboard}
          options={{
            headerTitleStyle: {
              fontFamily: "Poppins-Regular",
              fontWeight: "500",
              fontSize: 21,
              color: "black",
            },
            headerStyle: {
              height: 100,
            },
            headerLeft: () => (
              <Ionicons name="chevron-back-outline" size={25} color="#154fbb" />
            ),
            contentStyle: {
              alignItems: "center",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
