import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import PlayerScreen from "./PlayerScreen";
import PlayListScreen from "./PlayListScreen";

const PlayerAndListScreen = () => {
  return (
    <View>
      <PlayListScreen />
      <PlayerScreen />
    </View>
  );
};

export default PlayerAndListScreen;
