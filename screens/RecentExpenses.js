import { ScrollView } from "react-native";
import expenses from "../data/expenses.json";
import ExpenseList from "../components/ExpenseList";

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

function RecentExpenses() {
  console.log(filteredExpenses);
  return (
    <ScrollView>
      <ExpenseList expensesList={sortedExpenses} />
    </ScrollView>
  );
}

export default RecentExpenses;
