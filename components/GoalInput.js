import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ onAddGoal, visible, setUnVisible }) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={goalText} />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Close" onPress={setUnVisible} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
});
