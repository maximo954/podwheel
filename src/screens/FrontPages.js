import React from "react";
import Swiper from "react-native-swiper";

import PageOneScreen from "./PageOneScreen";
import PageTwoScreen from "./PageTwoScreen";
import PageThreeScreen from "./PageThreeScreen";

const FrontPages = ({ navigation }) => {
  return (
    <Swiper loop={false}>
      <PageOneScreen />
      <PageTwoScreen />
      <PageThreeScreen navigation={navigation}/>
    </Swiper>
  );
};

export default FrontPages;
