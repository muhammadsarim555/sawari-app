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

export default class ApplyBooking extends Component {
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

        <View style={searchBar}>
          <TouchableOpacity
            onPress={() => alert("chal rha ha")}
            style={backIcon}
          >
            <Icon name="ios-arrow-back" color="#D3D3D3" size={30} />
          </TouchableOpacity>

          <TextInput
            style={searchBarInput}
            value={searchText}
            placeholder={"Search Location"}
            onChangeText={searchText => this.setState({ searchText })}
          />
          {searchText ? (
            <TouchableOpacity
              onPress={() => this.setState({ searchText: "" })}
              style={{
                alignSelf: "center",
                flexDirection: "row"
              }}
            >
              <RemoveIcon name="closecircle" color="#D3D3D3" size={20} />
            </TouchableOpacity>
          ) : (
            <View style={{ width: "4.4%" }} />
          )}
        </View>

        <TouchableOpacity style={applyButton}>
          <Text style={applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
