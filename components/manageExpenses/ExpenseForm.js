import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Title"
        textInputConfig={{ keyboardType: "", multiLine: true }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChange: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChange: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;
