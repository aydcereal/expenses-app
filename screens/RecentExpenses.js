import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import ExpenseList from "../components/ExpenseList";
import ExpensesSummary from "../components/ExpensesSummary";

import { ExpensesContext } from "../components/store/expenses-context";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

function RecentExpenses() {
  const ExpensesCtx = useContext(ExpensesContext);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        ExpensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  let sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 14);

  let filteredExpenses = ExpensesCtx.expenses.filter((expense) => {
    let expensedate = new Date(expense.date);
    return expensedate > sevenDaysAgo;
  });

  let sortedExpenses = filteredExpenses.sort((a, b) => {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
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
      <ExpensesSummary range={"Last 7 Days"} totalAmount={totalAmount} />
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

export default RecentExpenses;
