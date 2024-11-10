import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState();

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    fontSize: 16,
  },
});

export default ToDoForm;
