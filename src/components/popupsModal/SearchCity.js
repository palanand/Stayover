import React, { Component } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  View,
  Alert
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CitySuggestion from "../explorePageComponents/CitySuggestion";
import axios from "axios";
import PropTypes from "prop-types";

export default class SearchCity extends Component {
  state = {
    modalVisible: false,
    error: false,
    query: "",
    results: []
  };

  async getSearchCityData() {
    const response = await axios
      .get(`https://api.github.com/search/repositories?q= ${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.items
        });
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ error: true });
      });
  }
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.savePlaces = this.savePlaces.bind(this);
  }

  handleInputChange() {
    if (this.state.query && this.state.query.length > 1) {
      // this.showDropdown()
      this.getSearchCityData();
    } else if (!this.state.query) {
      // this.hideDropdown()
    }
  }

  savePlaces(value) {
    this.props.savePlace(value);
    this.setModalVisible(false);
  }
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
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Image
                  style={imageStyle}
                  source={require("../../assets/leftarrow.png")}
                  backgroundColor="#611AA7"
                />
              </TouchableOpacity>
              {/* main code */}
              <TextInput
                style={styles.inputSearchText}
                ref="CitySearchbox"
                placeholder="Search for..."
                placeholderTextColor="white"
                onChangeText={text => {
                  this.setState({ query: text });
                  this.handleInputChange();
                }}
              />
            </View>
            <CitySuggestion
              results={this.state.results}
              navigation={this.props.navigation}
              savePlaces={this.savePlaces}
            />
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <SearchBar
            lightTheme={true}
            containerStyle={styles.searchcontainer}
            inputContainerStyle={styles.searchinputstyle}
            placeholder="Where are You traveling?"
            round={true}
            value={this.props.place}
            editable={false}
            onPress={() => this.setModalVisible(true)}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
SearchCity.propTypes = {
  savePlace: PropTypes.func
};
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
    backgroundColor: "#611AA7",
    color: "white",
    width: "100%"
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
    width: 50,
    height: 50
  }
});
