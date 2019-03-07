import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Image,
  TextInput
} from "react-native";
import { CheckBox } from "react-native-elements";
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
        "https://vp3zckv2r8.execute-api.us-east-1.amazonaws.com/latest/signup",
        {
          userName: this.state.userName,
          password: this.state.password,
          email: "this.state.email",
          countryCode: "sdaf",
          contactNo: "sdaf"
        }
      )
      .then(response => {
        // handle success
        console.log(response);
        this.onLoginSuccess();
      })
      .catch(error => {
        console.log(error.response);
        this.props.spinnerstart(false);
        Alert.alert(
          "Error",
          "Please provide all mandatory details",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        return;
      });
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
      <View style={styles.container}>
        <Text style={styles.plainText}>User name / Email address</Text>
        <TextInput
          style={styles.textinputstyle}
          onChangeText={text => this.setState({ userName: text })}
        />
        <Text style={styles.plainText}>Password</Text>
        <TextInput
          style={styles.textinputstyle}
          onChangeText={text => this.setState({ password: text })}
        />
        <CheckBox style={styles.plainText} title="Remember me" />
        <Button
          color="#EBAF00"
          title="DONE"
          onPress={this.LoginPressed.bind(this)}
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
        <Text style={styles.ForgotPass}>Forgot password</Text>
        <TouchableOpacity>
          <Text style={styles.skipapp}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginComponents.propTypes = {
  spinnerstart: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  skipapp: {
    flex: 1,
    color: "#7856bc",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10
  },
  loginarea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    padding: 20,
    width: "100%",

    backgroundColor: "#eee"
  },

  loginbuttoncontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    top: 230,
    left: 0,
    width: "100%",

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
