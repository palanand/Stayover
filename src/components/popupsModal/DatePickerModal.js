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
import PropTypes from "prop-types";

import CalendarPicker from "react-native-calendar-picker";

export default class DatePickerModal extends Component {
  state = {
    modalVisible: false,
    selectedStartDate: "Check in",
    selectedEndDate: "Check out"
  };
  constructor(props) {
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onDateChange(date, type) {
    (startdate = null), (endDate = null);
    if (type === "END_DATE") {
      endDate = date;
      this.setState({ selectedEndDate: new Date(date).toDateString() });
      this.props.saveDate(startdate, endDate);

      this.setState({ modalVisible: false });
    } else {
      startdate = date;
      this.setState({ selectedStartDate: new Date(date).toDateString() });

      this.props.saveDate(startdate, endDate);
    }
  }

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
          </View>

          <View style={{ flex: 1 }}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={new Date()}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />
          </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <TextInput
            style={styles.textinputstyle}
            placeholder="Check-in / Check-out"
            value={
              this.state.selectedStartDate +
              "                  " +
              this.state.selectedEndDate
            }
            editable={false}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
DatePickerModal.propTypes = {
  saveDate: PropTypes.func
};
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
