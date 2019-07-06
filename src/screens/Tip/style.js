import { StyleSheet, Dimensions } from "react-native";

import { Header } from "react-navigation";

// FILES
import { Colors } from "../../constant/appColor";

// CONSTANT
const { width, height } = Dimensions.get("window");
const headerHeight = Header.HEIGHT;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight: "500",
    alignSelf: "center"
  },
  body: {
    marginTop: height * 0.009
  },

  name: {
    fontSize: width * 0.06,
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 20
  },

  tip: {
    fontSize: width * 0.06,
    color: "black",
    marginTop: height * 0.03,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
    width: "80%"
  },
  cardContainer: {
    width: "80%",
    height: "80%",
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
  amountButton: { width: "33%", marginTop: height * 0.02 },
  amountButtonViews: {
    height: "80%",
    width: "80%",
    backgroundColor: "#BFC3C8",
    borderRadius: 40,
    alignSelf: "center"
  },
  amountButtonText: {
    alignSelf: "center",
    lineHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    fontSize: height * 0.03,
    fontWeight: "bold",
    color: "black"
  },
  otherAmountButton: {
    color: "red",
    textDecorationLine: "underline",
    alignSelf: "center",
    fontSize: height * 0.03,
    fontWeight: "bold"
  },
  doneButton: {
    backgroundColor: "#4252FF",
    borderRadius: 10,
    height: height * 0.06,
    width: "90%",
    marginTop: height * 0.02,
    alignSelf: "center"
  },
  doneButtonText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    lineHeight: height * 0.06
  },
  mayBeButton: {
    color: "#BFC3C8",
    alignSelf: "center",
    fontSize: width * 0.05,
    fontWeight: "600",
    marginTop: height * 0.02
  }
});
