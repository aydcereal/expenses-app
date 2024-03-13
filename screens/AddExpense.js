import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import BasicButton from "../components/BasicButton";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { ExpensesContext } from "../components/store/expenses-context";
import ExpenseForm from "../components/manageExpenses/ExpenseForm";

function AddExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    console.log("Cancel");
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        title: "Update Test",
        amount: 39.99,
        date: "2024-02-10",
      });
    } else {
      expensesCtx.addExpense({
        title: "Add Test",
        amount: 19.99,
        date: "2024-02-10",
      });
    }
    navigation.goBack();
  }
  return (
    <View>
      <View>
        <ExpenseForm />
        <View style={styles.innerContainer}>
          <BasicButton
            style={styles.button}
            title={"Cancel"}
            onPress={cancelHandler}
          />
          <BasicButton
            style={styles.button}
            title={isEditing ? "Update" : "Add"}
            onPress={confirmHandler}
          />
        </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color="#c41230"
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  deleteContainer: {
    margin: 16,
    padding: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});

export default AddExpense;
