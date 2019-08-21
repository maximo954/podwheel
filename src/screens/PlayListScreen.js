import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const PlayListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Play List Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PlayListScreen;
