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
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigation.dispatch(resetAction)}
        >
          <Image source={require("./img/splash.png")} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
