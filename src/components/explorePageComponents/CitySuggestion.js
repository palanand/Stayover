import React, { Component } from "react";
import { Text, StyleSheet, FlatList } from "react-native";
export default class SearchCity extends Component {
  render() {
    return (
      <FlatList
        data={this.props.results}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    );
  }
}
