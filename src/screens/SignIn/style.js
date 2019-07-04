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
  header: {
    height: "40%",
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center"
  },
  headerImage: {
    width: width * 0.3,
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10
  },
  cardTabs: {
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
  tabsText: {
    color: "black",
    borderBottomColor: "#FF4D4D",
    borderBottomWidth: 4
  },
  tabsBorder: {
    // borderLeft: 2,
    borderColor: "#C5C5C5",
    borderWidth: 1,
    height: 40
  },
  tabContainerStyle1: { fontSize: width * 0.06, fontWeight: "bold" },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center"
  },
  contentContainer: {
    height: "40%",
    backgroundColor: "white",
    width: "85%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 3
  },
  formButton: {
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    backgroundColor: "#FF4D4D",
    height: height * 0.08,
    width: "90%",
    alignSelf: "center"
  },
  formButtonText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    lineHeight: height * 0.08
  },
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
