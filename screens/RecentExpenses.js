import { ScrollView, View, Text, StyleSheet } from "react-native";
import expenses from "../data/expenses.json";
import ExpenseList from "../components/ExpenseList";
import ExpensesSummary from "../components/ExpensesSummary";

let tenDaysAgo = new Date();
tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

let filteredExpenses = expenses.filter((expense) => {
  let expensedate = new Date(expense.date);
  return expensedate > tenDaysAgo;
});

let sortedExpenses = filteredExpenses.sort((a, b) => {
  let dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateB - dateA;
});

let totalAmount = sortedExpenses.reduce(
  (total, expense) => total + expense.amount,
  0
);

function RecentExpenses() {
  return (
    <ScrollView style={styles.rootContainer}>
      <ExpensesSummary range={"Last 7 Days"} totalAmount={totalAmount} />

      <ExpenseList expensesList={sortedExpenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 25,
  },
});

export default RecentExpenses;
