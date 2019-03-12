import React, { Component } from "react";
import AppNavigator from "./AppNavigator";
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Image,
  View
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export default class Splash extends Component {
  state = {};
  componentWillMount() {
    setTimeout(this.startProcess.bind(this), 2000); //login logic here
  }
  startProcess() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    const { splashimg, splashimgtouch, container } = styles;

    return (
      <View style={container}>
        <Image source={require("./assets/splash.png")} style={splashimg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  splashimgtouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  splashimg: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }
});
