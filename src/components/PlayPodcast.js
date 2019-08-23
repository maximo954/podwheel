import React from "react";
import { Audio } from 'expo-av';
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-elements";

const PlayPodcast = () => {
  return (
    <View style={styles.container}>
      <Text>Play Podcast</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 25,
  },
});

export default PlayPodcast;
