import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const MostPopularScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Most Popular Screen</Text>
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

export default MostPopularScreen;
