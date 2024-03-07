import { Text, View, ScrollView, StyleSheet } from "react-native";

function ExpenseList({ expensesList = [] }) {
  console.log(expensesList);
  return (
    <ScrollView>
      {expensesList.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
    marginVertical: 5,
    padding: 10,
    flex: 1,
    alignContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  date: {},
  amountContainer: {
    backgroundColor: "gray",
    minWidth: 80,
    padding: 15,
    borderRadius: 5,
  },
  amount: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default ExpenseList;
