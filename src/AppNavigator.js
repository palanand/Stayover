import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import { Text, View, Image, Header, StyleSheet } from "react-native";
import SecondPage from "./components/SecondPage";
import Login from "./components/Login";
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
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "Login",
        header: null
      })
    },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Explore",
        header: <ImageHeader />
      })
    },
    SecondPage: {
      screen: SecondPage,
      navigationOptions: ({ navigation }) => ({
        title: "Second Page"
      })
    }
  },
  {
    headerMode: "float"
  }
);

export default createAppContainer(AppNavigator);
