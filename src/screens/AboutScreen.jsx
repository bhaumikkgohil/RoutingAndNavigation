import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const projectName = "To Do List App";
  const yourName = "Bhaumik Gohil";
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.displayText}>
          Project Name:
          <Text style={styles.boldText}>{projectName}</Text>
        </Text>
        <Text style={styles.displayText}>
          My Name: <Text style={styles.boldText}>{yourName}</Text>
        </Text>
        <Text style={styles.displayText}>
          Date: <Text style={styles.boldText}>{currentDate}</Text>
        </Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    alignItems: "center",
    padding: 16,
  },
  displayText: {
    fontSize: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default AboutScreen;
