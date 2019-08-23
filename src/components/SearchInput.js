import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

const SearchInput = ({ terms, setTerm, searchPodcast }) => {
  return (
    <View style={styles.container}>
      <Input
      inputStyle={{marginLeft: 10}}
        inputContainerStyle={styles.input}
        placeholder="Search"
        value={terms}
        onChangeText={setTerm}
      />
      <Button
        style={styles.button}
        title="Submit"
        type="clear"
        onPress={searchPodcast}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 45,
    marginBottom: 20,
    marginTop: 10
  },
  button: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#E0E0E0",
    backgroundColor: "#FAFAFA"
  }
});

export default SearchInput;
