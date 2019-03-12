import React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} from "react-native";
import { NavigationEvents } from "react-navigation";
import DatePickerModal from "../popupsModal/DatePickerModal";
import RoomTypes from "../popupsModal/RoomTypes";
import Gueststype from "../popupsModal/Gueststype";
import SearchCity from "../popupsModal/SearchCity";
import SearchResultModal from "../popupsModal/SearchResultModal";

import { Button, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

class Explore extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({
      title: "Clientes"
    });
  }
  render() {
    const { textinputstyle, container, imageStyle, Headingtext } = styles;
    return (
      <View style={container}>
        <NavigationEvents
          onWillFocus={payload => {
            console.log(this.props.navigation);
          }}
        />
        <View style={{ alignItems: "center", marginLeft: 15, marginRight: 15 }}>
          <Image
            style={imageStyle}
            source={require("../../assets/homepage.png")}
          />
          <Text style={Headingtext}>
            Book your favorite hotel from anywhere and any place!
          </Text>
        </View>
        <SearchCity />
        <View>
          <DatePickerModal />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Gueststype />
          <View>
            <RoomTypes />
          </View>
        </View>
        <View />

        <SearchResultModal />
      </View>
    );
  }
}

export { Explore };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 12,
    flexDirection: "column"
  },
  loginarea: {
    top: 50,
    padding: 20,
    backgroundColor: "#eee"
  },
  Headingtext: {
    color: "#4D1FA7",
    fontSize: 19,
    textAlign: "center"
  },
  logimage: {
    flex: 1,
    width: "100%",
    height: "70%",
    marginBottom: 10
  },
  plainText: {
    color: "#4D1FA7",
    fontWeight: "bold"
  },
  imageStyle: {
    resizeMode: "contain",
    alignItems: "center",
    width: "55%"
  },
  textinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  optionstyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gestinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
    width: "45%",
    paddingHorizontal: 10
  },
  roominputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
    width: "45%",
    paddingHorizontal: 10
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#ebaf00"
  },
  iconleft: {
    marginRight: 10
  },
  searchcontainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  searchinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});
