import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import BasicButton from "../BasicButton";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValue }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
    title: {
      value: defaultValue ? defaultValue.title.toString() : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    console.log(enteredValue.value);
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      title: String(inputs.title.value),
    };

    console.log("expenseData", expenseData.title);

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          title: { value: curInputs.title.value, isValid: titleIsValid },
        };
      });

      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Title"
        invalid={!inputs.title.isValid}
        textInputConfig={{
          multiLine: true,
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputs.title.value,
        }}
      />
      <View style={styles.rowContainer}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid Input Values</Text>
      )}

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
  errorText: {
    textAlign: "center",
    margin: 8,
    color: "#c41230",
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
