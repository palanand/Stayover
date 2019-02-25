/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  Text,
  Button,
  View
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoading: false
  };

  render() {
    function goTonewPage(myprop) {
      myprop.setState({
        isLoading: true
      });
      setTimeout(() => {
        myprop.props.navigation.navigate("SecondPage");
      }, 1500);
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          animating={this.state.isLoading}
        />
        <Text style={styles.welcome}>Welcome to Home!</Text>
        <Button title="Go to second page" onPress={() => goTonewPage(this)} />
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
