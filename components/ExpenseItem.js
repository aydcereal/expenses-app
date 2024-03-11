import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ title, date, amount, id, index }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("Add Expense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View key={index} style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 5,
    padding: 10,
    flex: 1,
    alignContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  date: {},
  amountContainer: {
    backgroundColor: "#012169",
    minWidth: 90,
    padding: 15,
    borderRadius: 5,
  },
  amount: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ExpenseItem;
