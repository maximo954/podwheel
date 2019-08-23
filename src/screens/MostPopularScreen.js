import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import podcastApi from "../api/podcast";
import PodcastList from "../components/PodcastList";
import SearchInput from "../components/SearchInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const MostPopularScreen = ({ navigation }) => {
  const [terms, setTerm] = useState("");
  const [podcasts, setPodcast] = useState("");

  const searchPodcast = async () => {
    const res = await podcastApi(terms);

    try {
      setPodcast(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(async () => {
  //   const res = await podcast("sports")
  //   setPodcast(res)
  // }, [searchPodCast])

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        terms={terms}
        setTerm={setTerm}
        searchPodcast={searchPodcast}
      />
      <FlatList
        keyExtractor={podcast => podcast.collectionId.toString()}
        data={podcasts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Player", {podcast: item})}>
              <PodcastList podcast={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

MostPopularScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  input: {}
});

export default MostPopularScreen;
