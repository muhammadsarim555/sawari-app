import { StyleSheet } from "react-native";

// FILES
import { Colors } from "../../constant/appColor";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
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
    height: "49%",
    width: "100%",
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center"
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "38%",
    width: "85%",
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 12,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 10
  },
  footer: {
    height: "20%",
    width: "100%",
    justifyContent: "center"
  },
  tabContainer: {
    justifyContent: "center"
  },
  formContainer: {
    justifyContent: "space-evenly",
    height: "100%"
  },
  tabWrapper: {
    backgroundColor: "white",
    height: 70,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderColor: "#C5C5C5",
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 12,
    shadowRadius: 2,
    elevation: 3
  }
});
