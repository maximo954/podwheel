import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-elements";

const PodcastList = ({ podcast }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: podcast.artworkUrl600 }} />
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>{podcast.collectionName}</Text>
        <Text>by {podcast.artistName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  text: {
    fontWeight: "bold"
  },
  info: {
    marginLeft: 15
  }
});

export default PodcastList;
