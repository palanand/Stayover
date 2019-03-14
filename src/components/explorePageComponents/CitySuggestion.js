import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

export default class CitySuggestion extends Component {
  constructor(props) {
    super(props);
    this.Citysave = this.Citysave.bind(this);
  }
  Citysave(valu) {
    this.props.savePlaces(valu);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              id={item.id}
              onPress={() => this.Citysave(item.city + ", " + item.state)}
            >
              <Text key={item.id} style={styles.item}>
                {item.city + ", " + item.state}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

CitySuggestion.propTypes = {
  savePlaces: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
