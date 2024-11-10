import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MainLayout;
