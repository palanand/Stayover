import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  Button,
  Text,
  View,
  Image,
  TextInput
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Spinner } from "../components/common/";
import { StackActions, NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import axios from "axios";

export default class SignupComponents extends Component {
  state = {
    userName: "",
    password: "",
    // email: "",
    countryCode: "",
    contactNo: ""
  };

  constructor(props) {
    super(props);
    this.onSignupSuccess == this.onSignupSuccess.bind(this);
  }
  async SignupPressed() {
    this.props.spinnerstart(true);

    const response = await axios
      .post(
        "https://vp3zckv2r8.execute-api.us-east-1.amazonaws.com/latest/signup",
        {
          userName: this.state.userName,
          password: this.state.password,
          email: "this.state.email",
          countryCode: this.state.countryCode,
          contactNo: this.state.contactNo
        }
      )
      .then(response => {
        // handle success
        console.log(response);
        this.onSignupSuccess();
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

  onSignupSuccess() {
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
          onChangeText={text => {
            this.setState({ userName: text });

            // var pattern = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

            // if (pattern.test(text) == 0) {
            //   this.setState({ userName: text });
            // } else {
            //   this.setState({ email: text });
            // }
          }}
        />
        <Text style={styles.plainText}>Password</Text>
        <TextInput
          style={styles.textinputstyle}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Text style={styles.plainText}>Country</Text>
          <TextInput
            style={styles.textinputstyle}
            onChangeText={text => this.setState({ countryCode: text })}
          />

          <Text style={styles.plainText}>Contact No.</Text>
          <TextInput
            style={styles.textinputstyle}
            onChangeText={text => this.setState({ contactNo: text })}
          />
        </View>
        <Button
          color="#4D1FA7"
          title="SIGN UP"
          onPress={this.SignupPressed.bind(this)}
        />
      </View>
    );
  }
}

SignupComponents.propTypes = {
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
