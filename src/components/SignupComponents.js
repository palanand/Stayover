import React, { Component } from "react";
import { StyleSheet, Button, Text, View, Image, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import { Spinner } from "../components/common/";
import { StackActions, NavigationActions } from "react-navigation";

export default class SignupComponents extends Component {
  state = { isLoading: false };

  LoginPressed() {
    this.setState({ isLoading: true });

    setTimeout(this.onLoginSuccess.bind(this), 2000); //login logic here
  }
  renderSpinner() {
    if (this.state.isLoading) {
      return <Spinner style={{ flex: 1 }} />;
    }
  }
  onLoginSuccess() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });

    this.setState({ isLoading: false });
    this.props.navigationData.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.plainText}>User name / Email address</Text>
        <TextInput style={styles.textinputstyle} />
        <Text style={styles.plainText}>Password</Text>
        <TextInput style={styles.textinputstyle} />
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Text style={styles.plainText}>Country</Text>
          <TextInput style={styles.textinputstyle} />

          <Text style={styles.plainText}>Contact No.</Text>
          <TextInput style={styles.textinputstyle} />
        </View>
        <Button
          color="#4D1FA7"
          title="SIGN UP"
          onPress={this.LoginPressed.bind(this)}
        />
        {this.renderSpinner()}
      </View>
    );
  }
}

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
