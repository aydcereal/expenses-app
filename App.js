import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AddExpense from "./screens/AddExpense";

import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: "#d61313",
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <IconButton
              icon={"add"}
              color={"black"}
              onPress={() => navigation.navigate("AddExpense")}
            />
          </View>
        ),
      })}
    >
      <Tab.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#d61313",
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#d61313",
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TabNavigator}
        />
        <RootStack.Screen name="AddExpense" component={AddExpense} />
      </RootStack.Navigator>
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
  editButton: {
    margin: 20,
  },
});
