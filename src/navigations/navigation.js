import { createStackNavigator, createAppContainer } from "react-navigation";

// SCREENS
import * as Screens from "../screens";

const AppNavigator = createStackNavigator(
  {
    SignIn: Screens.SignIn,
    PhoneVerification: Screens.PhoneVerification,
    Map: Screens.ApplyBooking,
    RequestBooking: Screens.RequestBooking
  },
  {
    initialRouteName: "RequestBooking"
  }
);

export default createAppContainer(AppNavigator);
