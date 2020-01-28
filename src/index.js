import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {
    AuthLoadingScreen,
    Dashboard,
    ForgotPasswordScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    Webview
} from "./screens";

const Router = createStackNavigator(
    {
        HomeScreen,
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        Dashboard,
        AuthLoadingScreen,
        Webview
    },
    {
        initialRouteName: "AuthLoadingScreen",
    }
);

export default createAppContainer(Router);
