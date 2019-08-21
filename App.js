import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import FavoriteScreen from "./src/screens/FavoriteScreen"
import MostPopularScreen from "./src/screens/MostPopularScreen"
// import PageOneScreen from "./src/screens/PageOneScreen"
// import PageThreeScreen from "./src/screens/PageThreeScreen"
// import PageTwoScreen from "./src/screens/PageTwoScreen"

import FrontPages from "./src/screens/FrontPages"
import PlayerScreen from "./src/screens/PlayerScreen"
import RecentScreen from "./src/screens/RecentScreen"

const switchNavigator = createSwitchNavigator({
  frontPage: FrontPages,
  mainFlow: createBottomTabNavigator({
    Popular: MostPopularScreen,
    Favorites: FavoriteScreen,
    Recent: RecentScreen,
    Player: PlayerScreen
  })
});

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <App/>
  )
}
