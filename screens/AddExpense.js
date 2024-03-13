import { Text, View, Button, StyleSheet } from "react-native";
import BasicButton from "../components/BasicButton";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { ExpensesContext } from "../components/store/expenses-context";

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
      {isEditing ? (
        <View>
          <View style={styles.innerContainer}>
            <BasicButton
              style={styles.button}
              title={"Cancel"}
              onPress={cancelHandler}
            />
            <BasicButton
              style={styles.button}
              title={"Confirm"}
              onPress={confirmHandler}
            />
          </View>
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color="#c41230"
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.innerContainer}>
            <BasicButton
              style={styles.button}
              title={"Cancel"}
              onPress={cancelHandler}
            />
            <BasicButton
              style={styles.button}
              title={"Add"}
              onPress={confirmHandler}
            />
          </View>
        </View>
      )}
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
