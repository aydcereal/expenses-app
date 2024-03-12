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

  function deleteExpenseHandler() {
    console.log("delete");
    navigation.goBack();
  }

  function cancelHandler() {
    console.log("Cancel");
    navigation.goBack();
  }

  function confirmHandler() {
    console.log("confirm");
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
