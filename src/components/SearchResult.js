import React from "react";
import {
  Dimensions,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from "react-native";
import ImageHeader from "../components/ImageHeader";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class SearchResult extends React.Component {
  render() {
    const { textstyle, maincontainer, imageStyle, container } = styles;
    return (
      <View style={maincontainer}>
        <ImageHeader title="Search Results" />
        <View style={container}>
          <Text style={textstyle}>Here is the result</Text>
          <Button title="demo" />
          <Image
            style={imageStyle}
            source={require("../../src/assets/trips.png")}
          />
        </View>
      </View>
    );
  }
}

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
