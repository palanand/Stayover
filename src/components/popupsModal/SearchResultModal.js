import React, { Component } from "react";
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SearchResultModal extends Component {
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
        <Button
          title="Go"
          icon={
            <Icon
              name="location-arrow"
              type="font-awesome"
              color="#fff"
              size={18}
              style={styles.iconleft}
            />
          }
          onPress={() => this.setModalVisible(true)}
          buttonStyle={styles.button}
        />
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
  buttonstyle: {
    backgroundColor: "transparent",
    borderColor: "#DFDFDF",
    borderWidth: 2,
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
