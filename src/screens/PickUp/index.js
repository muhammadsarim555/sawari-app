import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from "react-native";

// PACKAGES
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import RemoveIcon from "react-native-vector-icons/AntDesign";

// FILES
import { styles } from "./style";

export default class PickUp extends Component {
  state = {
    searchText: ""
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { searchText } = this.state;
    const {
      backIcon,
      searchBar,
      searchBarInput,
      applyButton,
      applyButtonText
    } = styles;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" color="black" />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 24.91444,
            longitude: 67.029831,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />

        <View style={searchBar} />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ApplyBooking")}
        >
          <Text>go</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
