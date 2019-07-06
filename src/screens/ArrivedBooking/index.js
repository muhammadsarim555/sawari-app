import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

// PACKAGES
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import RemoveIcon from "react-native-vector-icons/FontAwesome";

import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent
} from "react-native-popup-dialog";

// FILES
import { styles } from "./style";
// CONSTANT
const { width, height } = Dimensions.get("window");

export default class ApplyBooking extends Component {
  state = {
    searchText: "",
    visible: false,
    isCancel: false
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { searchText, visible, isCancel } = this.state;
    const {
      removeIcon,
      footerContainer1,
      directionRow,
      directionColumn,
      recommendation,
      footerContainer2,
      arrivedButton,
      arrivedButtonText
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

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={removeIcon}
        >
          <RemoveIcon name="remove" color="#909090" size={30} />
        </TouchableOpacity>

        <View
          style={{
            height: "40%",
            justifyContent: "space-between"
          }}
        >
          {/*PROFILE IMAGE WITH CALL & SMS  */}
          <View style={footerContainer1}>
            {/* TYPE */}

            <View style={directionRow}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 20
                }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />

              {/* CONTENT */}
              <View style={{ flexDirection: "column" }}>
                <Text>Just go</Text>
                <Text>Nearby you</Text>
              </View>
            </View>

            {/* PRICE */}
            <View style={directionRow}>
              <View style={directionColumn}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Chat")}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 15
                    }}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62MX8GWVLGrjgfOaKp3keSIrsgh2hCv_VN3E48hnGNrdnLsyCJQ"
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={directionColumn}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                  }}
                  source={{
                    uri:
                      "data:image/png;base64,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"
                  }}
                />
              </View>
            </View>
          </View>

          {/* RECOMMENDATION */}
          <View style={recommendation}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3uVtavE6rt9K1_GUtVPUaVTfEWSzrX-21a6GhljYXP8Z2ArG"
                }}
                resizeMode="contain"
              />
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </View>

            <View style={directionRow}>
              <Text>45 Recommended</Text>
            </View>
          </View>

          <View style={footerContainer2}>
            <View style={directionRow}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 20
                }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />

              {/* CONTENT */}
              <View style={directionColumn}>
                <Text>Just go</Text>
                <Text>Nearby you</Text>
              </View>
            </View>

            {/* PRICE */}
            <View style={directionRow}>
              <View style={{ flexDirection: "column", marginRight: 20 }}>
                <Text>Speed</Text>
                <Text>88</Text>
              </View>
              <View style={directionColumn}>
                <Text>Time</Text>
                <Text>88</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={arrivedButton}
            onPress={() => this.props.navigation.navigate("Rating")}
          >
            <Text style={arrivedButtonText}>Arrived</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
