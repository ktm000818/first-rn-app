import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHander() {
    setModalIsVisible(true);
  }
  function finishAddGoalHander() {
    setModalIsVisible(false);
  }

  function addGoalHandler(text) {
    setGoalList((goalList) => [...goalList, { id: Math.random().toString(), text }]);
  }

  function deleteGoalHandler(id) {
    setGoalList((goalList) => [...goalList].filter(goal => goal.id !== id))
    console.log("DELETE");
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color={"#5e0acc"} onPress={startAddGoalHander} />
      <GoalInput visible={modalIsVisible} setUnVisible={finishAddGoalHander} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          renderItem={(itemData) => <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />}
          data={goalList}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
