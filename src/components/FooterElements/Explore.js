import React from "react";
import {
  Dimensions,
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Image
} from "react-native";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class Explore extends React.Component {
  render() {
    const { textstyle, imageStyle, container } = styles;
    return (
      <View style={container}>
        <TextInput
          style={styles.textinputstyle}
          placeholder="Where are you travelling"
        />
        <TextInput style={styles.textinputstyle} />
        <Button color="#EBAF00" title="Go" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 220,
    flex: 1,
    backgroundColor: "#fff",
    margin: 12
  },

  plainText: {
    color: "#4D1FA7",
    fontWeight: "bold"
  },
  textinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    borderRadius: 25
  }
});
