import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// PACKAGES
import StarRating from "react-native-star-rating";

export default class Rating extends Component {
  state = {
    starCount: 3.5
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "80%",
            height: "60%",
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
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.carName}>Car Name</Text>

              <Text style={styles.tip}>How was your tip?</Text>
              <Text style={styles.tipDescription}>
                Your feedback will help improve our driving experience
              </Text>

              <StarRating
                disabled={false}
                emptyStar={"ios-star-outline"}
                fullStar={"ios-star"}
                halfStar={"ios-star-half"}
                iconSet={"Ionicons"}
                maxStars={7}
                rating={this.state.starCount}
                selectedStar={rating => alert("chal rha ha")}
                fullStarColor={"red"}
              />
            </View>
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
    backgroundColor: "blue"
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
    fontWeight: "600"
  },
  carName: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "300"
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
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  tip: {
    fontSize: 24,
    color: "#696969",
    marginTop: 10,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center"
  },
  tipDescription: {
    fontSize: 18,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
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
