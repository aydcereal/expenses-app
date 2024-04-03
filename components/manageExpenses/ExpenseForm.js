import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input label="Title" textInputConfig={{ multiLine: true }} />
      <View style={styles.rowContainer}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChange: amountChangedHandler,
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChange: () => {},
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 24,
    fontWeight: "bold",
  },
  form: {
    marginTop: 24,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ExpenseForm;
