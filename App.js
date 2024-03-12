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
import ExpensesContextProvider from "./components/store/expenses-context";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: "#c41230",
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <IconButton
              icon={"add"}
              color={"black"}
              size={24}
              onPress={() => navigation.navigate("Add Expense")}
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
          tabBarActiveTintColor: "#c41230",
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#c41230",
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerTitleStyle: { color: "#c41230" },
            headerTintColor: "#012169",
          }}
        >
          <RootStack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={TabNavigator}
          />
          <RootStack.Screen
            name="Add Expense"
            component={AddExpense}
            options={{ presentation: "modal" }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
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
