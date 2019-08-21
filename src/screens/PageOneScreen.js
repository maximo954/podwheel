import React from "react";
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const PageOneScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text h3>Page One Screen</Text>
    </SafeAreaView>
  );
};

PageOneScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PageOneScreen;
