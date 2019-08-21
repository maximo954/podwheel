import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import PlayListScreen from "./PlayListScreen";

const PlayerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Player Screen</Text>

      <PlayListScreen />
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

export default PlayerScreen;
