import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpenseItem from "./ExpenseItem";
function ExpenseList({ expensesList }) {
  return (
    <ScrollView>
      {expensesList.map((item, index) => {
        {
          console.log(item.id);
        }
        return (
          <ExpenseItem
            key={index}
            index={index}
            id={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </ScrollView>
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

export default ExpenseList;
