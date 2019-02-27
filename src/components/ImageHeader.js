import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Header,
  Dimensions,
  StyleSheet
} from "react-native";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

class ImageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Explore"
    };
  }
  render() {
    const { imageHead, textstyle } = styles;

    return (
      <View>
        <Image source={require("../assets/bg.png")} style={imageHead} />
        <Text style={textstyle}>{this.state.titleText}</Text>
      </View>
    );
  }
}

export default ImageHeader;

const styles = StyleSheet.create({
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
  imageHead: {
    flex: 1,
    resizeMode: "stretch",
    alignItems: "center",
    position: "absolute",
    width: winWidth,
    height: winHeight * 0.15
  }
});
