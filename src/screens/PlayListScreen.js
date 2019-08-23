import React, { useState, useEffect } from "react";
import { DOMParser } from "xmldom";
import { Audio } from "expo-av";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { Text, Button } from "react-native-elements";
import axios from "axios";

const PlayListScreen = ({ feedUrl, image, closeTab }) => {
  const [lists, setList] = useState("");
  
  const podcastPlayList = async () => {
    const list = await axios.get(feedUrl);
    const podcastDocument = new DOMParser().parseFromString(
      list.data,
      "text/xml"
    );
    const items = podcastDocument.getElementsByTagName("item");
    setList(items);
  };

  useEffect(() => {
    podcastPlayList();
  }, []);

  renderPodcastTrack = track => {
    const pubDates = Array.prototype.slice.call(
      track.getElementsByTagName("pubDate")
    );

    const thumbnails = Array.prototype.slice.call(
      track.getElementsByTagName("thumbnail")
    );

    const titles = Array.prototype.slice.call(
      track.getElementsByTagName("title")
    );

    return (
      <TouchableOpacity
        key={
          pubDates[0].childNodes[0] !== undefined &&
          pubDates[0].childNodes[0].nodeValue
        }
        onPress={() => this.onPressPodcastTrack(track)}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: "row"
          }}
        >
          {thumbnails[0] ? (
            <Image
              style={styles.thumbnails}
              source={{ uri: thumbnails[0].childNodes[0].nodeValue }}
            />
          ) : (
            <Image style={styles.thumbnails} source={{ uri: image }} />
          )}
          <Text
            style={{
              color: "#007afb",
              fontSize: 15,
              marginLeft: 15
            }}
          >
            {titles[0].childNodes[0] !== undefined
              ? titles[0].childNodes[0].nodeValue
              : null}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  onPressPodcastTrack = async track => {
    const titles = Array.prototype.slice.call(
      track.getElementsByTagName("title")
    );

    const links = Array.prototype.slice.call(
      track.getElementsByTagName("link")
    );

    const enclosures = Array.prototype.slice.call(
      track.getElementsByTagName("enclosure")
    );

    if (links[0] !== undefined) {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync({ uri: enclosures[0].getAttribute("url") });
        await soundObject.playAsync();
        {() => closeTab()}
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Sorry there is no link for this podcast");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Play List</Text>
      <ScrollView>
        {Array.prototype.slice.call(lists).map(this.renderPodcastTrack)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  thumbnails: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  text: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center"
  }
});

export default PlayListScreen;
