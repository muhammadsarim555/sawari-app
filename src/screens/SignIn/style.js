import { StyleSheet, Dimensions } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  header: {
    height: "49%",
    width: "100%",
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center"
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "50%",
    width: "85%",
    borderBottomColor: "#D1D5DA",
    borderBottomWidth: 2,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "red",
    shadowOpacity: 5.0,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 10
  },
  footer: {
    height: "10%",
    width: "100%",
    justifyContent: "center"
  },
  tabContainer: {
    justifyContent: "center"
  },
  formContainer: {
    padding: height * 0.04,
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  formStyling: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray"
  },

  // using
  tabWrapper: {
    backgroundColor: "white",
    height: height * 0.1,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderColor: "#C5C5C5",
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 12,
    shadowRadius: 2,
    elevation: 3
  },
  tabContent: { fontSize: 18, fontWeight: "bold" },
  tabContainerStyle1: { fontSize: width * 0.06, fontWeight: "bold" },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center"
  },
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  box1: {
    height: 200,
    backgroundColor: "blue"
  },
  box2: {
    height: 200,
    backgroundColor: "purple"
  }
});
