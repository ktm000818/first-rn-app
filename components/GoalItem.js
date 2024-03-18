import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        style={({pressed}) => pressed && styles.pressedItem} 
        android_ripple={{ color: "#dddddd" }} 
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "black",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "white", 
    padding: 8
  },
});
