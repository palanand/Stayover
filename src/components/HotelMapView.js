import MapView from "react-native-maps";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

class HotelMapView extends Component {
  state = {};
  render() {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default HotelMapView;
