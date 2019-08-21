import React from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const PageThreeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text h3>Page Three Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("mainFlow")}>
          <Text>Start Podding</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

PageThreeScreen.navigationOptions = {
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

export default PageThreeScreen;
