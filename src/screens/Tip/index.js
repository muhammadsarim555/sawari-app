import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar
} from "react-native";

// PACKAGES
import BackIcon from "react-native-vector-icons/Ionicons";

// CONSTANT
const { width, height } = Dimensions.get("window");
const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;

export default class Tip extends Component {
  state = {
    tipAmout: [1, 2, 5]
  };

  static navigationOptions = {
    headerTitleStyle: { textAlign: "center", flex: 1, color: "white" },
    title: "Tips",
    headerStyle: {
      backgroundColor: "#2B2B2B"
    },
    headerLeft: (
      <TouchableOpacity style={{ paddingLeft: 20 }}>
        <BackIcon name="ios-arrow-back" color="white" size={25} />
      </TouchableOpacity>
    ),
    headerRight: <View style={{ paddingRight: 20 }} />
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  changeRoute = e => {
    alert(e);
  };
  render() {
    let { tipAmout } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2B2B2B" />
        <View
          style={{
            width: "80%",
            height: "70%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "blue",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 12,
            shadowRadius: 2,
            elevation: 3
          }}
        >
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
          <View style={styles.body}>
            <Text style={styles.name}>Muhammad Sarim</Text>
            <Text style={styles.carName}>Car Name</Text>

            <Text style={styles.tip}>
              Wow! A 5 star! Wanna add tip for Sarim
            </Text>
            <FlatList
              data={tipAmout}
              renderItem={({ item, id }) => (
                <TouchableOpacity
                  onPress={() => this.changeRoute(item)}
                  style={{ width: "33%", marginTop: 10 }}
                >
                  <View
                    style={{
                      width: size,
                      height: size,
                      alignSelf: "center"
                    }}
                  >
                    <View
                      style={{
                        height: 80,
                        width: 80,
                        backgroundColor: "#BFC3C8",
                        borderRadius: 40,
                        alignSelf: "center"
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          lineHeight: 80,
                          fontSize: 22,
                          fontWeight: "bold"
                        }}
                      >
                        ${item}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item}
              numColumns={numColumns}
            />

            <TouchableOpacity
              onPress={() => alert("chal rha aksdfkahsdfkakjfhkahsf")}
            >
              <Text
                style={{
                  color: "red",
                  textDecorationLine: "underline",
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Choose other amount
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#4252FF",
                borderRadius: 10,
                height: height * 0.06,
                width: "90%",
                marginTop: 10,
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  fontSize: width * 0.04,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                  lineHeight: height * 0.06
                }}
              >
                {" "}
                Done{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("chal rha aksdfkahsdfkakjfhkahsf")}
            >
              <Text
                style={{
                  color: "#BFC3C8",
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  marginTop: 10
                }}
              >
                Maybe next time
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2B2B"
  },
  header: {
    backgroundColor: "red",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    top: -70
    // marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
    alignSelf: "center"
  },
  carName: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 20
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  tip: {
    fontSize: 26,
    color: "#696969",
    marginTop: 10,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
    alignSelf: "center",
    width: "80%"
  },

  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});
