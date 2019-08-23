import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Slider
} from "react-native";
import { Text } from "react-native-elements";
import BottomDrawer from "rn-bottom-drawer";
import { Ionicons } from "@expo/vector-icons";

import PlayListScreen from "./PlayListScreen";
import PlayPodcast from "../components/PlayPodcast";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 155 });

const animatedImageHeight = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 155],
  outputRange: [300, 32],
  extrapolate: "clamp"
});

const titleOpacity = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 155],
  outputRange: [0, 0, 1],
  extrapolate: "clamp"
});

const animationImageMarginLeft = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 155],
  outputRange: [SCREEN_WIDTH / 2 - 150, 10],
  extrapolate: "clamp"
});

const animatedHeaderHeight = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 155],
  outputRange: [SCREEN_HEIGHT / 2, 90],
  extrapolate: "clamp"
});

const animatedControllerOpacity = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 155],
  outputRange: [1, 0, 0],
  extrapolate: "clamp"
});

const animatedBackgroundColor = animation.y.interpolate({
  inputRange: [0, SCREEN_HEIGHT - 155],
  outputRange: ["rgba(0,0,0,0.5)", "white"],
  extrapolate: "clamp"
});

const PlayerScreen = ({ navigation }) => {
  const [isScrollenable, setIsScrollenable] = useState(false)
  const podcast = navigation.getParam("podcast");
  let scrollOffset = 0

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      if ((isScrollenable && scrollOffset <= 0 && gestureState.dy > 0) || !isScrollenable && gestureState.dy < 0) {
        return true
      } else {
        return false
      }
    },
    onPanResponderGrant: (evt, gestureState) => {
      animation.extractOffset();
    },
    onPanResponderMove: (evt, gestureState) => {
      animation.setValue({ x: 0, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.moveY > SCREEN_HEIGHT - 155) {
        Animated.spring(animation.y, {
          toValue: 0,
          tension: 1
        }).start();
      } else if (gestureState.moveY < 155) {
        Animated.spring(animation.y, {
          toValue: 0,
          tension: 1
        }).start();
      } else if (gestureState.dy < 0) {
        setIsScrollenable(true)
        Animated.spring(animation.y, {
          toValue: -SCREEN_HEIGHT + 155,
          tension: 1
        }).start();
      } else if (gestureState.dy > 0) {
        setIsScrollenable(false)
        Animated.spring(animation.y, {
          toValue: SCREEN_HEIGHT - 155,
          tension: 1
        }).start();
      }
    }
  });

  useEffect(() => {
    animation;
    panResponder;
  }, []);

  const animatedHeight = {
    transform: animation.getTranslateTransform()
  };

  return (
    <Animated.View style={{
      flex: 1,
      backgroundColor: animatedBackgroundColor,
      alignItems: "center"
    }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[animatedHeight, styles.animated]}
      >
        <ScrollView scrollEnabled={isScrollenable} scrollEventThrottle={16} onScroll={(event) => {
          scrollOffset = event.nativeEvent.contentOffset.y
        }}>
          <Animated.View
            style={{
              height: animatedHeaderHeight,
              borderTopWidth: 1,
              borderTopColor: "#ebe5e5",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View style={styles.viewContainer}>
              <Animated.View
                style={{
                  width: animatedImageHeight,
                  height: animatedImageHeight,
                  borderRadius: 5,
                  marginLeft: animationImageMarginLeft
                }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: podcast.artworkUrl600 }}
                />
              </Animated.View>
              <Animated.Text
                style={{
                  marginLeft: 10,
                  marginBottom: 16,
                  opacity: titleOpacity,
                  fontSize: 15
                }}
              >
                The car tech talk
              </Animated.Text>
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                flex: 1,
                opacity: titleOpacity,
                justifyContent: "space-around",
                marginBottom: 16
              }}
            >
              <Ionicons name="md-pause" size={32} />
              <Ionicons name="md-play" size={32} />
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={{
              height: animatedHeaderHeight,
              opacity: animatedControllerOpacity
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                The car tech talk
              </Text>
              <Text style={{ fontSize: 18, color: "#BDBDBD" }}>
                Spike's Radio
              </Text>
            </View>

            <View
              style={{ height: 40, width: SCREEN_WIDTH, alignItems: "center" }}
            >
              <Slider
                style={{ width: 300 }}
                step={1}
                minimumValue={18}
                maximumValue={71}
                value={18}
              />
            </View>

            <View
              style={{
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Ionicons name="md-rewind" size={40} />
              <Ionicons name="md-pause" size={50} />
              <Ionicons name="md-fastforward" size={40} />
            </View>
          </Animated.View>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

PlayerScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 5,
    marginTop: -10
  },
  player: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  animated: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    height: SCREEN_HEIGHT,
    backgroundColor: "white"
  },
  viewContainer: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  playerIcons: {
    flexDirection: "row",
    flex: 1,
    opacity: 1,
    justifyContent: "space-around",
    marginBottom: 16
  }
});

export default PlayerScreen;
