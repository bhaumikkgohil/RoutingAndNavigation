import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Lab-5 : Routing & Navigation </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});
