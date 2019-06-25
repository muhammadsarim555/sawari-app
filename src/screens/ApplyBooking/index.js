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

// CONSTANT
const { width, height } = Dimensions.get("window");

export default class ApplyBooking extends Component {
  state = {
    searchText: ""
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { searchText } = this.state;

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

        <View
          style={{
            height: 40,
            borderRadius: 20,
            width: "90%",
            position: "absolute",
            top: height * 0.009,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "white",
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "red",
            shadowOffset: { height: 0, width: 0 },
            elevation: 3,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => alert("chal rha ha")}
            style={{
              alignSelf: "center",
              flexDirection: "row",
              marginRight: width * 0.07
            }}
          >
            <Icon
              name="ios-arrow-back"
              color="#D3D3D3"
              size={30}
              // style={{ marginHorizontal: width * 0.01 }}
            />
          </TouchableOpacity>

          <TextInput
            style={{
              height: 40,
              borderRadius: 70,
              alignSelf: "center",
              backgroundColor: "white",
              color: "black",
              width: "82%",
              textAlign: "center"
            }}
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
              <RemoveIcon
                name="closecircle"
                color="#D3D3D3"
                size={20}
                // style={{ marginHorizontal: width * 0.01 }}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: "4.3%" }} />
          )}
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: "#367CFF",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Courier-Bold",
              color: "white"
            }}
          >
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
