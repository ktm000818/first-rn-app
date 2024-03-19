import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ onAddGoal, visible, setUnVisible }) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    onAddGoal(goalText);
    setGoalText("");
  }

  console.log('GoalInput Component rendered.');

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={goalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"#b180f0"} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={setUnVisible} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
  button: {
    width: 150,
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
