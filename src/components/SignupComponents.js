import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  Picker,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

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
    countryCode: "US",
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
          //email: "this.state.email",
          countryCode: "US",
          contactNo: this.state.contactNo
        }
      )
      .then(response => {
        // handle success
        console.log(response);
        this.onSignupSuccess();
        Alert.alert(
          "Success",
          "Signup completed successfully.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      })
      .catch(error => {
        console.log(error.response);
        this.props.spinnerstart(false);
        Alert.alert(
          "Error",
          "Please enter all the details.",
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
      <KeyboardAvoidingView style={styles.container}>
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
        <Text />
        <Text style={styles.plainText}>Password</Text>
        <TextInput
          style={styles.textinputstyle}
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: "row", margin: 5 }}
        >
          <Text style={styles.plainText}>Country</Text>
          <Text style={styles.plainText}>Contact No.</Text>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: "row", margin: 5 }}
        >
          <Picker
            ref="pickerCountry"
            style={{
              height: 30,
              width: 100,
              left: 0,
              borderRadius: 25,
              borderWidth: 2
            }}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ countryCode: itemValue })
            }
          >
            <Picker.Item label="US" value="US" />
          </Picker>
          <Text style={{ width: "23%" }} />
          <TextInput
            style={styles.contactinputstyle}
            onChangeText={text => this.setState({ contactNo: text })}
          />
        </KeyboardAvoidingView>
        <Button
          color="#4D1FA7"
          title="SIGN UP"
          buttonStyle={styles.button}
          onPress={this.SignupPressed.bind(this)}
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
      </KeyboardAvoidingView>
    );
  }
}

SignupComponents.propTypes = {
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
    backgroundColor: "#ebaf00",
    top: "2%"
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
  },
  contactinputstyle: {
    flex: 0.8,
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    alignItems: "flex-end",
    width: "40%",
    borderRadius: 25
  }
});
