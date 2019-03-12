import React, { Component } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";
import CitySuggestion from "../explorePageComponents/CitySuggestion";
import { axios } from "axios";

export default class SearchCity extends Component {
  state = {
    modalVisible: false,
    error: false,
    query: "",
    results: []
  };

  async getSearchCityData() {}

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        this.getSearchCityData();

        if (this.state.query && this.state.query.length > 1) {
          // this.showDropdown()
          if (this.state.query.length % 2 === 0) {
            this.getSearchCityData();
          }
        } else if (!this.state.query) {
          // this.hideDropdown()
        }
      }
    );
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onDateChange = () => {};
  render() {
    const { textstyle, imageStyle, buttonstyle, container } = styles;

    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={container}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Image
                style={imageStyle}
                source={require("../../assets/exit.png")}
              />
            </TouchableHighlight>

            {/* main code */}

            <TextInput
              style={styles.inputSearchText}
              ref={input => (this.search = input)}
              placeholder="Search for..."
              onChange={this.handleInputChange.bind(this)}
            />

            <CitySuggestion results={this.state.results} />
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <SearchBar
            lightTheme={true}
            containerStyle={styles.searchcontainer}
            inputContainerStyle={styles.searchinputstyle}
            placeholder="Where are You traveling?"
            round={true}
            editable={false}
            onPress={() => this.setModalVisible(true)}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  searchcontainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  buttonstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    borderRadius: 25
  },
  searchinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  inputSearchText: {
    borderRadius: 25
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
  button: {
    borderRadius: 25,
    backgroundColor: "#ebaf00"
  },
  imageStyle: {
    alignItems: "flex-end",
    width: 50,
    height: 50
  }
});
