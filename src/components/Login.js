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
import { StyleSheet, Button, Text, View, Image, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginarea}>
          <Image
            source={require("../assets/authentication.png")}
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
          <Text style={styles.plainText}>User name / Email address</Text>
          <TextInput style={styles.textinputstyle} />
          <Text style={styles.plainText}>Password</Text>
          <TextInput style={styles.textinputstyle} />
          <CheckBox style={styles.plainText} title="Remember me" />

          <Button
            color="#EBAF00"
            title="Done"
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Text style={styles.ForgotPass}>Forgot password</Text>
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
  ForgotPass: {
    flex: 1,
    color: "#4D1FA7",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  plainText: {
    flex: 1,
    color: "#4D1FA7",
    fontWeight: "bold"
  },
  textinputstyle: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    borderRadius: 25
  }
});
