import { Dimensions, StyleSheet } from "react-native";

// CONSTANT
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  removeIcon: {
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: width * 0.09,
    position: "absolute",
    top: height * 0.1,
    height: height * 0.08,
    backgroundColor: "#FFFFFF",
    width: width * 0.13,
    borderRadius: 20,
    alignItems: "center",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "red",
    shadowOffset: { height: 0, width: 0 },
    elevation: 3
  },
  footerContainer1: {
    height: "20%",
    backgroundColor: "#F4F4F4",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  directionRow: { flexDirection: "row" },
  directionColumn: { flexDirection: "column" },
  footerContainer2: {
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  recommendation: {
    height: "10%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  arrivedButton: {
    borderRadius: 10,
    backgroundColor: "#4252FF",
    height: height * 0.07,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: height * 0.02
  },
  arrivedButtonText: {
    fontWeight: "bold",
    fontSize: width * 0.05,
    fontFamily: "Courier-Bold",
    color: "white"
  }
});
