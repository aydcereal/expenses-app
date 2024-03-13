import { Text, View, ScrollView, StyleSheet } from "react-native";
import expenses from "../data/expenses.json";
import ExpenseList from "../components/ExpenseList";
import ExpensesSummary from "../components/ExpensesSummary";
import { useContext } from "react";
import { ExpensesContext } from "../components/store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  let sortedExpenses = expensesCtx.expenses.sort((a, b) => {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  let totalAmount = sortedExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  let content = <Text style={styles.infoText}>No expenses found</Text>;

  if (totalAmount > 0) {
    content = <ExpenseList expensesList={sortedExpenses} />;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <ExpensesSummary range={"All expenses"} totalAmount={totalAmount} />
      {content}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 25,
  },
  infoText: {
    fontSize: 16,
    marginTop: 32,
    textAlign: "center",
  },
});

export default AllExpenses;
