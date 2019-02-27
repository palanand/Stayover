import React from "react";
import { Text, View, Image } from "react-native";
import {
  createAppContainer,
  NavigationEvents,
  createBottomTabNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Explore from "./FooterElements/Explore";
import Inbox from "./FooterElements/Inbox";
import Profile from "./FooterElements/Profile";
import Trips from "./FooterElements/Trips";
import Icon from "react-native-vector-icons/MaterialIcons";
import Saved from "./FooterElements/Saved";

<NavigationEvents
  onWillFocus={payload => {
    console.log("will focus", payload);
  }}
/>;

const Home = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }} color={tintColor}>
            search
          </Icon>
        )
      })
    },
    Saved: {
      screen: Saved,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }} color={tintColor}>
            save
          </Icon>
        )
      })
    },
    Trips: {
      screen: Trips,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }} color={tintColor}>
            work
          </Icon>
        )
      })
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }} color={tintColor}>
            chat
          </Icon>
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ fontSize: 20 }} color={tintColor}>
            person
          </Icon>
        )
      })
    }
  },
  {
    activeColor: "#4D1FA7",
    inactiveColor: "#CACACA",
    labeled: true,
    barStyle: { backgroundColor: "white" }
  }
);

export default createAppContainer(Home);
