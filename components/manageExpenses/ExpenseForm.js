import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    title: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
    console.log("change");
    console.log(inputIdentifier);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Title"
        textInputConfig={{
          multiLine: true,
          onChange: inputChangedHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      />
      <View style={styles.rowContainer}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChange: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChange: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
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
