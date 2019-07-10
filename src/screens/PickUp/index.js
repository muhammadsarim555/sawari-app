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
import Location from "react-native-vector-icons/Entypo";
import { TextField } from "react-native-material-textfield";

// FILES
import { Colors } from "../../constant/appColor";
import { styles } from "./style";

// CONSTANT
const { grayColor, pinkColor } = Colors;

export default class PickUp extends Component {
  state = {
    pickUpLocation: ""
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { pickUpLocation } = this.state;
    const { image, circleStyle, locationIcon } = styles;

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

        <View style={image} />

        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "30%",
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "red",
            shadowOpacity: 5.0,
            shadowRadius: 2,
            elevation: 3
          }}
        >
          <View
            style={{
              width: "80%",
              alignItems: "center",
              marginTop: 50,
              flexWrap: "wrap",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <View style={circleStyle} />
            <TextInput
              style={{
                height: 60,
                borderBottomColor: "gray",
                borderBottomWidth: 2,
                width: "70%",
                alignSelf: "center"
              }}
              placeholder="PICKUP"
              onChangeText={pickUpLocation => this.setState({ pickUpLocation })}
              value={pickUpLocation}
            />
          </View>

          <View
            style={{
              width: "80%",
              alignItems: "center",
              marginTop: 50,
              flexWrap: "wrap",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <Location
              name="location-pin"
              color={pinkColor}
              size={50}
              style={locationIcon}
            />

            <TextInput
              style={{
                height: 60,
                borderBottomColor: "gray",
                borderBottomWidth: 2,
                width: "70%",
                alignSelf: "center"
              }}
              placeholder="PICKUP"
              onChangeText={pickUpLocation => this.setState({ pickUpLocation })}
              value={pickUpLocation}
            />
          </View>
        </View>
      </View>
    );
  }
}
