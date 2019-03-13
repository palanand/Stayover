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
import PropTypes from "prop-types";

export default class GuestsRoomtype extends Component {
  state = {
    modalVisible: false
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
    paddingHorizontal: 10
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
