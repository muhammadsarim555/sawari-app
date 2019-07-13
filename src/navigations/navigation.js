import { createStackNavigator, createAppContainer } from "react-navigation";

// SCREENS
import * as Screens from "../screens";

const AppNavigator = createStackNavigator(
  {
    SignIn: Screens.SignIn,
    PhoneVerification: Screens.PhoneVerification,
    ApplyBooking: Screens.ApplyBooking,
    RequestBooking: Screens.RequestBooking,
    ConfirmBooking: Screens.ConfirmBooking,
    ArrivedBooking: Screens.ArrivedBooking,
    Chat: Screens.Chat,
    Rating: Screens.Rating,
    Tip: Screens.Tip,
    PickUp: Screens.PickUp
  },
  {
    initialRouteName: "ApplyBooking"
  }
);

export default createAppContainer(AppNavigator);
