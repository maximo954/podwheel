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
import RecentScreen from "./src/screens/RecentScreen"
import PlayerAndListScreen from "./src/screens/PlayerAndListScreen";

const switchNavigator = createSwitchNavigator({
  // frontPage: FrontPages,
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      Popular: MostPopularScreen,
      PlayerAndList: PlayerAndListScreen
    }),
    Favorites: FavoriteScreen,
    Recent: RecentScreen
  })
});

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <App/>
  )
}
