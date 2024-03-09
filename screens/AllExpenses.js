import { Text, View, ScrollView, StyleSheet } from "react-native";
import expenses from "../data/expenses.json";
import ExpenseList from "../components/ExpenseList";
import ExpensesSummary from "../components/ExpensesSummary";

let sortedExpenses = expenses.sort((a, b) => {
  let dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateB - dateA;
});

let totalAmount = sortedExpenses.reduce(
  (total, expense) => total + expense.amount,
  0
);

function AllExpenses() {
  return (
    <ScrollView style={styles.rootContainer}>
      <ExpensesSummary range={"All expenses"} totalAmount={totalAmount} />
      <ExpenseList expensesList={sortedExpenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 25,
  },
});

export default AllExpenses;
