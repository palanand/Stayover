import React from "react";
import {
  Dimensions,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from "react-native";
import ImageHeader from "../ImageHeader";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

class Saved extends React.Component {
  render() {
    const { textstyle, maincontainer, imageStyle, container } = styles;
    return (
      <View style={maincontainer}>
        <ImageHeader title="Saved" />
        <View style={container}>
          <Image
            style={imageStyle}
            source={require("../../assets/trips.png")}
          />
        </View>
      </View>
    );
  }
}

export { Saved };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: "20%",
    flexDirection: "column"
  },
  maincontainer: { flex: 1, flexDirection: "column", position: "relative" },

  textstyle: {
    flex: 1,
    alignItems: "center",
    height: 40,
    color: "green",
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
