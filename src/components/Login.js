/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import SwitchSelector from "react-native-switch-selector";
import { StyleSheet, Button, View, Image, TextInput } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginarea}>
          <Image
            source={require("../assets/credit_card.png")}
            style={styles.logimage}
          />
        </View>

        <View style={styles.loginbuttoncontainer}>
          <SwitchSelector
            initial={0}
            onPress={value => this.setState({ gender: value })}
            textColor="#808080" //'#7a44cf'
            selectedColor="#ffffff"
            hasPadding
            options={[
              {
                label: "Log in",
                value: "login",
                activeColor: "#ebaf00"
              },
              {
                label: "Sign Up",
                value: "signup",
                activeColor: "#4d1fa7"
              }
            ]}
          />
        </View>
        <View style={styles.loginoption}>
          <TextInput style={styles.textinputstyle} />
          <Button
            title="go to home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loginarea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    padding: 20,
    backgroundColor: "#eee"
  },
  logimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginBottom: 10
  },
  loginbuttoncontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    top: 230,
    left: 0,
    right: 0
  },
  loginoption: {
    flex: 1,

    position: "absolute",
    padding: 20,
    top: 330,
    left: 0,
    right: 0
  },
  textinputstyle: {
    flex: 1,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25
  }
});
