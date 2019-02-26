import React, { Component } from "react";
import AppNavigator from "./AppNavigator";
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  Text,
  Button,
  Image,
  View
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export default class Splash extends Component {
  state = {};

  render() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    const { splashimg, splashimgtouch, container } = styles;

    return (
      <View style={container}>
        <TouchableHighlight
          style={splashimgtouch}
          onPress={() => this.props.navigation.dispatch(resetAction)}
        >
          <Image source={require("./assets/splash.png")} style={splashimg} />
        </TouchableHighlight>
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
