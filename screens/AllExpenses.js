import { Text, View, ScrollView, StyleSheet } from "react-native";
import expenses from "../data/expenses.json";
import ExpenseList from "../components/ExpenseList";

let sortedExpenses = expenses.sort((a, b) => {
  let dateA = new Date(a.date),
    dateB = new Date(b.date);
  return dateB - dateA;
});

function AllExpenses() {
  return (
    <ScrollView>
      <ExpenseList expensesList={sortedExpenses} />
    </ScrollView>
  );
}

export default AllExpenses;
