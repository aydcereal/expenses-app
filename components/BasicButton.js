import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function BasicButton({ icon, color, onPress, title }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#012169",
    minWidth: 100,
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});

export default BasicButton;
