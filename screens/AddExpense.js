import { Text, View, Button, StyleSheet } from "react-native";
import BasicButton from "../components/BasicButton";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function AddExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  return (
    <View>
      {isEditing && (
        <View>
          <View style={styles.innerContainer}>
            <BasicButton style={styles.button} title={"Cancel"} />
            <BasicButton style={styles.button} title={"Add"} />
          </View>
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color="#c41230"
              size="medium"
              onPress={deleteExpenseHandler}
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
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});

export default AddExpense;
