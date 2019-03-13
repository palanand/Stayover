import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert,
  CheckBox,
  View,
  Image,
  TextInput
} from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome";

import { StackActions, NavigationActions } from "react-navigation";

export default class LoginComponents extends Component {
  constructor(props) {
    super(props);
    this.onLoginSuccess == this.onLoginSuccess.bind(this);
  }
  state = {
    userName: "",
    password: ""
    // email: "",
  };
  async LoginPressed() {
    this.props.spinnerstart(true);

    const response = await axios
      .post(
        "https://vp3zckv2r8.execute-api.us-east-1.amazonaws.com/latest/signin",
        {
          userName: this.state.userName,
          password: this.state.password,
          // email: "this.state.email",
          countryCode: "sdaf",
          contactNo: "sdaf"
        }
      )
      .then(response => {
        // handle success
        if (this.state.userName == "" || this.state.password == "") {
          Alert.alert(
            "Error",
            "Please enter username & password to login or click on skip for now.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          this.props.spinnerstart(false);

          return;
        }
        if (response.data.Count != 0) {
          console.log(response);
          this.onLoginSuccess();
        } else {
          Alert.alert(
            "Error",
            "Invalid username or password",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          this.props.spinnerstart(false);
        }
      })
      .catch(error => {
        console.log(error.response);
        this.props.spinnerstart(false);
        Alert.alert(
          "Error",
          "Please enter username & password to login or click on skip for now.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        return;
      });
  }

  onSkipping() {
    this.props.navigationData.navigation.navigate("Home");
  }

  onLoginSuccess() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });

    this.props.navigationData.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.plainText}>User name / Email address</Text>
        <TextInput
          style={styles.textinputstyle}
          onChangeText={text => this.setState({ userName: text })}
        />
        <Text />

        <Text style={styles.plainText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textinputstyle}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={{ flexDirection: "row", margin: 5 }}>
          <CheckBox style={styles.plainText} />
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <Button
          color="#EBAF00"
          title="DONE"
          onPress={this.LoginPressed.bind(this)}
          buttonStyle={styles.button}
          icon={
            <Icon
              name="chevron-right"
              type="font-awesome"
              color="#fff"
              size={18}
              style={styles.iconRight}
            />
          }
        />
        <Text />
        <Text style={styles.ForgotPass}>Forgot password</Text>
        <TouchableOpacity onPress={this.onSkipping.bind(this)}>
          <Text style={styles.skipapp}>Skip for now</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

LoginComponents.propTypes = {
  spinnerstart: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 0.47,
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  skipapp: {
    textAlign: "center",
    textDecorationLine: "underline"
  },
  loginarea: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",

    backgroundColor: "#eee"
  },

  loginbuttoncontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "relative",
    top: 230,
    left: 0,
    width: "100%",

    right: 0
  },
  loginoption: {
    flex: 1,
    position: "relative",
    padding: 20,
    left: 0,
    right: 0
  },
  ForgotPass: {
    flex: 1,
    color: "#4D1FA7",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  plainText: {
    flex: 1,
    color: "#4D1FA7",
    fontWeight: "bold"
  },
  remember: {
    alignItems: "flex-start",
    justifyContent: "center",
    left: "10%",
    top: 5,
    position: "absolute",
    color: "#4D1FA7"
  },
  button: {
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#ebaf00"
  },
  iconRight: {
    position: "absolute",
    top: 12,
    right: 10
  },
  textinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    borderRadius: 25
  }
});
