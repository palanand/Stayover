import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import { Text, View, Image, Header, StyleSheet } from "react-native";
import SearchResult from "./components/SearchResult";
import LoginSignup from "./components/LoginSignup";
import Splash from "./Splash";
import ImageHeader from "./components/ImageHeader";
import Hoteldetails from "./components/Details/Hoteldetails";

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
    SearchResult: {
      screen: SearchResult,
      navigationOptions: ({ navigation }) => ({
        title: "SearchResult",
        header: null
      })
    },

    Hoteldetails: {
      screen: Hoteldetails,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("HotelTitle", "Hotel details"),
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#4D1FA7"
        }
      })
    }
  },
  {
    headerMode: "float"
  }
);

export default createAppContainer(AppNavigator);
