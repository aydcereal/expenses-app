import { Text, View, Button, StyleSheet } from "react-native";
import BasicButton from "../components/BasicButton";

function AddExpense() {
  return (
    <View style={styles.container}>
      <BasicButton style={styles.button} title={"Cancel"} />
      <BasicButton style={styles.button} title={"Add"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default AddExpense;
