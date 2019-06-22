import React, { Component } from "react";
import {
  Platform,
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

// FILES

export default class Maps extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
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
            top: 50,
            alignSelf: "center",
            backgroundColor: "white",
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "red",
            shadowOffset: { height: 0, width: 0 },
            elevation: 3
          }}
        >
          {/* <TouchableOpacity
            onPress={() => alert("chal rha ha")}
            style={{
              flexDirection: "row",
              padding: 5,
              marginLeft: 20,
              width: 10
            }}
          >
            <Icon
              name="ios-arrow-back"
              color="black"
              size={30}
              // style={{ marginLeft:  }}
            />
          </TouchableOpacity> */}
          <TextInput
            style={{
              height: 40,
              borderRadius: 70,
              alignSelf: "center",
              backgroundColor: "white",
              color: "black",
              width: "60%",
              textAlign: "center"
            }}
            placeholder={"Pick Up Location"}
            onChangeText={text => this.setState({ text })}
          />
          {/* <Icon
            name="ios-arrow-back"
            color="white"
            size={15}
            // style={{ : height * 0.03 }}
          /> */}
        </View>
        {/* <View
          style={{
            width: 70,
            backgroundColor: "black",
            position: "absolute",
            top: 50,
            height: 70,
            borderRadius: 50,
            left: 10
          }}
        /> */}
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
