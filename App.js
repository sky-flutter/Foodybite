import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Login} from "./src/login";
import {Registration} from "./src/registration";
import {ForgetPassword} from "./src/forget-password";
import {TurnLocation} from "./src/turn_location";
import {Home} from "./src/home";

const navigationContainer = createStackNavigator({
    Home: {
        screen: Login
    },
    Registration: {
        screen: Registration
    },
    ForgetPassword: {
        screen: ForgetPassword
    },
    TurnLocation: {
        screen: TurnLocation
    },
    MainHome: {
        screen: Home
    }
});


const app = createAppContainer(navigationContainer)
export default app;


