import { axios } from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-963ce-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
