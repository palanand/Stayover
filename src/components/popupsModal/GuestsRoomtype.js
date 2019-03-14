import React, { Component } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Alert
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import { CheckBox } from "react-native-elements";
import NumericInput from "react-native-numeric-input";

export default class GuestsRoomtype extends Component {
  state = {
    modalVisible: false,
    Hotelchecked: false,
    Entirechecked: false,
    Privatechecked: false,
    Sharedchecked: false,
    AdultCount: 0,
    ChildrenCount: 0,
    InfantCount: 0
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onDateChange = () => {};
  render() {
    const { textstyle, imageStyle, buttonstyle, container } = styles;
    const { checked } = this.state;
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
                  source={require("../../assets/exit.png")}
                />
              </TouchableOpacity>

              {/* main code */}
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#4C42AD",
                  fontWeight: "bold",
                  fontSize: 18,
                  marginTop: 8
                }}
              >
                Guests
              </Text>
              <View style={{ flexDirection: "row", padding: 23 }}>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Children
                </Text>
                <NumericInput rounded onChange={value => console.log(value)} />
              </View>
              <View style={{ flexDirection: "row", padding: 23 }}>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Infants
                </Text>
                <NumericInput rounded onChange={value => console.log(value)} />
              </View>
              <View style={{ flexDirection: "row", padding: 23 }}>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Adults
                </Text>
                <NumericInput rounded onChange={value => console.log(value)} />
              </View>
              <Text
                style={{
                  color: "#4C42AD",
                  marginTop: 25,
                  fontWeight: "bold",
                  fontSize: 18
                }}
              >
                Room Type
              </Text>
              <CheckBox
                title="Hotel Room"
                onPress={() =>
                  this.setState({ Hotelchecked: !this.state.Hotelchecked })
                }
                checked={this.state.Hotelchecked}
              />
              <CheckBox
                title="Entire Place"
                onPress={() =>
                  this.setState({ Entirechecked: !this.state.Entirechecked })
                }
                checked={this.state.Entirechecked}
              />
              <CheckBox
                title="Private Room"
                onPress={() =>
                  this.setState({ Privatechecked: !this.state.Privatechecked })
                }
                checked={this.state.Privatechecked}
              />
              <CheckBox
                title="Shared Room"
                onPress={() =>
                  this.setState({ Sharedchecked: !this.state.Sharedchecked })
                }
                checked={this.state.Sharedchecked}
              />
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.gestinputstyle}
              editable={false}
              placeholder="Guests"
            />
            <TextInput
              style={styles.gestinputstyle}
              editable={false}
              placeholder="Room types"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

GuestsRoomtype.propTypes = {
  saveGuests: PropTypes.func,
  saveRoomType: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  gestinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    minWidth: 170, // This is just here because I can't make the textInput automatically grow on Android
    maxWidth: "95%"
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
