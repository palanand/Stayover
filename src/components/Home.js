import React from "react";
import { Text, View, Image } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Explore from "./FooterElements/Explore";
import Inbox from "./FooterElements/Inbox";
import Profile from "./FooterElements/Profile";
import Trips from "./FooterElements/Trips";
import Icon from "react-native-vector-icons/MaterialIcons";
import Saved from "./FooterElements/Saved";
import { Provider as PaperProvider } from "react-native-paper";

const Home = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }}>search</Icon>
        )
      })
    },
    Saved: {
      screen: Saved,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }}>save</Icon>
        )
      })
    },
    Trips: {
      screen: Trips,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }}>work</Icon>
        )
      })
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }}>chat</Icon>
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }}>person</Icon>
        )
      })
    }
  },
  {
    activeColor: "#6239B1",
    inactiveColor: "grey",
    labeled: true,
    barStyle: { backgroundColor: "white" }
  }
);

export default createAppContainer(Home);
