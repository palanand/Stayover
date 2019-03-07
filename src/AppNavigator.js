import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import { Text, View, Image, Header, StyleSheet } from "react-native";
import SecondPage from "./components/SecondPage";
import LoginSignup from "./components/LoginSignup";
import Splash from "./Splash";
import ImageHeader from "./components/ImageHeader";

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({ navigation }) => ({
        title: "Splash",
        header: null
      })
    },

    Login: {
      screen: LoginSignup,
      navigationOptions: ({ navigation }) => ({
        title: "LoginSignup",
        header: null
      })
    },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Explore",
        header: null
      })
    },
    SecondPage: {
      screen: SecondPage,
      navigationOptions: ({ navigation }) => ({
        title: "Second Page".anchor,
        header: null
      })
    }
  },
  {
    headerMode: "float"
  }
);

export default createAppContainer(AppNavigator);
