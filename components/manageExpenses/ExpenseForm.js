import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import BasicButton from "../BasicButton";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValue }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : "",
    date: defaultValue ? getFormattedDate(defaultValue.date) : "",
    title: defaultValue ? defaultValue.title.toString() : "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue.nativeEvent.text,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      title: inputValues.title,
    };

    const amounIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length > 0;

    if (!amounIsValid || !dateIsValid || !titleIsValid) {
      console.log("Invalid");
      Alert.alert("Invalid Values");
      return;
    }

    onSubmit(expenseData);
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
      <View style={styles.innerContainer}>
        <BasicButton
          style={styles.button}
          title={"Cancel"}
          onPress={onCancel}
        />
        <BasicButton
          style={styles.button}
          title={submitButtonLabel}
          onPress={submitHandler}
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
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default ExpenseForm;
