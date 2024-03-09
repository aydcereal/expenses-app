import { Text, View, StyleSheet } from "react-native";

function ExpensesSummary({ range, totalAmount }) {
  return (
    <View style={styles.rangeContainer}>
      <Text style={styles.Text}>{range}</Text>
      <View>
        <Text style={styles.Text}>${totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    backgroundColor: "#c2bcbc",
    marginBottom: 10,
  },
  amountContainer: {
    backgroundColor: "#012169",
    minWidth: 80,
    padding: 10,
    borderRadius: 5,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ExpensesSummary;
