import React from "react";
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const PageOneScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text h3>Page One Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("mainFlow")}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
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
  },
  button: {
    position: 'absolute',
    bottom: 35,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#FB8C00"
  }
});

export default PageOneScreen;
