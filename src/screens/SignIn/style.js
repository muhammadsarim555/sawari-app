import { StyleSheet } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
  },
  header: {
    height: "40%",
    width: "100%",
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center"
  },
  body: {
    height: "50%",
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "yellow"
  },
  footer: {
    height: "30%",
    width: "100%",
    justifyContent: "center"
  },
  tabContainer: {
    justifyContent: "center"
  },
  formContainer: {
    justifyContent: "space-evenly",
    height: "100%"
  }
});
