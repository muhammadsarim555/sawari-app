import { StyleSheet, Dimensions } from "react-native";

import { Header } from "react-navigation";

// CONSTANT
const { width, height } = Dimensions.get("window");
const headerHeight = Header.HEIGHT;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2B2B"
  },

  avatar: {
    width: width * 0.3,
    height: height * 0.2,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    top: -70
  },

  carName: {
    fontSize: width * 0.05,
    fontWeight: "300",
    alignSelf: "center"
  },
  body: {
    marginTop: height * 0.009
  },

  name: {
    fontSize: width * 0.06,
    color: "#696969",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: height * 0.06
  },

  textArea: {
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginTop: 20,
    height: height * 0.3
  },
  tip: {
    fontSize: width * 0.06,
    color: "#696969",
    marginTop: height * 0.03,
    fontWeight: "600",
    textAlign: "center"
  },
  tipDescription: {
    fontSize: width * 0.05,
    color: "#696969",
    marginTop: height * 0.02,
    textAlign: "center",
    width: "90%",
    alignSelf: "center"
  },

  cardContainer: {
    width: "80%",
    height: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 12,
    shadowRadius: 2,
    elevation: 3,
    marginTop: headerHeight
  },
  starContainer: { width: "90%", alignSelf: "center" },
  starStyling: {
    width: width * 0.6,
    height: 20,
    alignSelf: "center"
  },
  submitButton: {
    borderRadius: 10,
    backgroundColor: "#4252FF",
    height: height * 0.07,
    width: "100%",
    marginBottom: 10,
    marginTop: 10
  },
  submitButtonText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    lineHeight: height * 0.07
  }
});
