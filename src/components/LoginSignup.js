/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { CheckBox } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import { NavigationActions, StackActions } from "react-navigation";
import { Spinner } from "./common";
import LoginComponents from "./LoginComponents";
import SignupComponents from "./SignupComponents";
import Swiper from "react-native-swiper";

export default class LoginSignup extends Component {
  state = { isLoading: false, currIndex: 0 };
  LoginPressed() {
    this.setState({ isLoading: true });
    setTimeout(this.onLoginSuccess.bind(this), 2000); //login logic here
  }
  renderSpinner() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
  }

  changePage(value) {
    if (value === "login" && this.refs.swiper.state.index == 1) {
      this.refs.swiper.scrollBy(-1);
      this.refs.swipertop.scrollBy(-1);
    } else if (value === "signup" && this.refs.swiper.state.index == 0) {
      this.refs.swiper.scrollBy(1);
      this.refs.swipertop.scrollBy(1);
    }
  }

  constructor(props) {
    super(props);
    this.SpinnerStart = this.SpinnerStart.bind(this);
  }

  SpinnerStart(value) {
    this.setState({ isLoading: value });
  }
  onLoginSuccess() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });

    this.setState({ isLoading: false });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginarea}>
          <Swiper
            ref="swipertop"
            showsButtons={false}
            loop={false}
            showsPagination={false}
          >
            <Image
              source={require("../assets/login.png")}
              style={styles.logimage}
            />
            <Image
              source={require("../assets/authentication.png")}
              style={styles.logimage}
            />
          </Swiper>
        </View>
        <Swiper
          ref="swiper"
          style={{ top: "50%" }}
          showsButtons={false}
          scrollEnabled={false}
          loop={false}
          showsPagination={false}
        >
          <LoginComponents
            navigationData={this.props}
            spinnerstart={this.SpinnerStart}
          />
          <SignupComponents
            navigationData={this.props}
            spinnerstart={this.SpinnerStart}
          />
        </Swiper>
        <View style={styles.loginbuttoncontainer}>
          <SwitchSelector
            ref="switch"
            initial={0}
            onPress={value => this.changePage(value)}
            textColor="#808080" //'#7a44cf'
            selectedColor="#ffffff"
            hasPadding={true}
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
        {this.renderSpinner()}
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
  iconRight: {
    position: "absolute",
    top: 12,
    right: 10
  },
  logimage: {
    flex: 1,
    width: "90%",
    height: "90%",
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
