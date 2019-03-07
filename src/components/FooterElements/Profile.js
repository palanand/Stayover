import React from "react";
import {
  Dimensions,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

class Profile extends React.Component {
  logoutPressed() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { textstyle, imageStyle, container } = styles;
    return (
      <View style={container}>
        <Text style={textstyle}>Where To?</Text>
        <Button title="Explore StayOver" />
        <Image style={imageStyle} source={require("../../assets/trips.png")} />
        <Button title="Logout" onPress={this.logoutPressed.bind(this)} />
      </View>
    );
  }
}
export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  textstyle: {
    flex: 1,
    alignItems: "center",
    height: 40,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    top: 13,
    fontSize: 24
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    position: "absolute",
    width: winWidth
  }
});
