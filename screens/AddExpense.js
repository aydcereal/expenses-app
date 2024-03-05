import { Text, View, Button, StyleSheet } from "react-native";

function AddExpense() {
  return (
    <View style={styles.container}>
      <Button title={"Cancel"} />
      <Button title={"Add"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddExpense;
