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

export default class RoomTypes extends Component {
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
            <Text>Search result</Text>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <TextInput
            style={styles.gestinputstyle}
            editable={false}
            placeholder="Room types"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  searchcontainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
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
