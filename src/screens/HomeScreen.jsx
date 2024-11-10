import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([
    "Do the laundry",
    "Do the dishes",
    "Walk the dog",
  ]);

  const addTask = (taskText) => {
    if (taskText.trim().length === 0) return;
    if (tasks.includes(taskText)) {
      Alert.alert("Task already exists!");
      return;
    }
    setTasks([...tasks, taskText]);
  };
  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>
              {index + 1 + ") "}
              {task}
            </Text>
          </View>
        ))}
      </ScrollView>
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("AboutScreen")}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  task: {
    padding: 10,
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
  },
  taskText: {
    fontSize: 18,
  },
  container: {
    marginTop: 10,
  },
});

export default HomeScreen;
