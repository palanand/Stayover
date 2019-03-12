import React, { Component } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { Button } from "react-native-elements";

import CalendarPicker from "react-native-calendar-picker";

export default class DatePickerModal extends Component {
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
            <CalendarPicker
              onDateChange={this.onDateChange}
              allowRangeSelection={true}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#4D1FA7"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange.bind(this)}
            />
            <Button title="Proceed" buttonStyle={styles.button} />
          </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <TextInput
            style={styles.textinputstyle}
            placeholder="Check-in / Check-out"
            editable={false}
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
  textinputstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 1,
    borderRadius: 25,
    margin: 10
  },
  buttonstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    borderRadius: 25
  },
  button: {
    backgroundColor: "#EBAF00"
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
  imageStyle: {
    alignItems: "flex-end",
    width: 50,
    height: 50
  }
});
