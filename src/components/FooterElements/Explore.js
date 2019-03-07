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
    const {
      textinputstyle,
      container,
      optionstyle,
      gestinputstyle,
      roominputstyle,
      loginarea,
      logimage
    } = styles;
    return (
      <View style={container}>
        <NavigationEvents
          onWillFocus={payload => {
            console.log(this.props.navigation);
          }}
        />

        <SearchBar
          lightTheme={true}
          containerStyle={styles.searchcontainer}
          inputContainerStyle={styles.searchinputstyle}
          placeholder="Where are You traveling?"
          round={true}
        />
        <View>
          <DatePickerModal />
        </View>
        <View>
          <TextInput style={gestinputstyle} placeholder="Guests" />
          <TextInput style={roominputstyle} placeholder="Room Type" />
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
    top: "30%"
  },
  loginarea: {
    top: 50,
    padding: 20,
    backgroundColor: "#eee"
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
    width: "50%",
    paddingHorizontal: 10
  },
  roominputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
    width: "50%",
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
    paddingHorizontal: 10,
    marginBottom: 10,
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
